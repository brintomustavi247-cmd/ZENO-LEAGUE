import { doc, getDoc, setDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc, writeBatch } from 'firebase/firestore';
import { db } from './firebase';

// ══════════════════════════════════════
//  USER DOCUMENTS
// ══════════════════════════════════════

export async function fetchUser(uid) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) return userSnap.data();
  return null;
}

export async function createUser(uid, data) {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, {
    ...data,
    balance: 0, kills: 0, wins: 0, matchesPlayed: 0, earnings: 0,
    banned: false, status: 'active', createdAt: new Date().toISOString()
  });
}

export async function updateUser(uid, data) {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, data);
}

export async function fetchUsersByIGNs(igns) {
  if (!igns || igns.length === 0) return [];
  const usersCol = collection(db, 'users');
  const q = query(usersCol, where('ign', 'in', igns));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function fetchUsersByIds(userIds) {
  if (!userIds || userIds.length === 0) return [];
  const refs = userIds.map(id => doc(db, 'users', id));
  const snaps = await Promise.all(refs.map(ref => getDoc(ref)));
  return snaps
    .filter(snap => snap.exists())
    .map(snap => ({ id: snap.id, ...snap.data() }));
}

// ══════════════════════════════════════
//  MATCH DOCUMENTS
// ══════════════════════════════════════

export async function fetchMatches() {
  const matchesCol = collection(db, 'matches');
  const matchesSnap = await getDocs(matchesCol);
  return matchesSnap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function createMatchInDb(matchId, data) {
  const matchRef = doc(db, 'matches', matchId);
  await setDoc(matchRef, data);
}

export async function updateMatchInDb(matchId, data) {
  const matchRef = doc(db, 'matches', matchId);
  await updateDoc(matchRef, data);
}

// ══════════════════════════════════════
//  TRANSACTION LOG
// ══════════════════════════════════════

export async function addTransaction(txData) {
  const txRef = doc(db, 'transactions', txData.id);
  await setDoc(txRef, txData);
}

export async function fetchTransactions(uid) {
  const txCol = collection(db, 'transactions');
  const q = query(txCol, where('userId', '==', uid));
  const txSnap = await getDocs(q);
  return txSnap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ══════════════════════════════════════
//  PLATFORM SETTINGS
// ══════════════════════════════════════

export async function getSettings() {
  const settingsRef = doc(db, 'settings', 'global');
  const settingsSnap = await getDoc(settingsRef);
  if (settingsSnap.exists()) return settingsSnap.data();
  return null;
}

export async function saveSettings(data) {
  const settingsRef = doc(db, 'settings', 'global');
  const settingsSnap = await getDoc(settingsRef);
  if (settingsSnap.exists()) {
    await updateDoc(settingsRef, data);
  } else {
    await setDoc(settingsRef, data);
  }
}

// ══════════════════════════════════════
//  ADD MONEY REQUESTS (Pending Approval)
// ══════════════════════════════════════

export async function createAddMoneyRequest(requestData) {
  const reqRef = doc(db, 'addMoneyRequests', requestData.id);
  await setDoc(reqRef, requestData);
}

export async function fetchPendingAddMoneyRequests() {
  const col = collection(db, 'addMoneyRequests');
  const q = query(col, where('status', '==', 'pending'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function approveAddMoneyRequest(requestId, userId, amount) {
  const reqRef = doc(db, 'addMoneyRequests', requestId);
  await updateDoc(reqRef, { status: 'approved', processedAt: new Date().toISOString() });

  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const currentBalance = userSnap.data().balance || 0;
    await updateDoc(userRef, { balance: currentBalance + amount });
  }
}

export async function rejectAddMoneyRequest(requestId) {
  const reqRef = doc(db, 'addMoneyRequests', requestId);
  await updateDoc(reqRef, { status: 'rejected', processedAt: new Date().toISOString() });
}

// ══════════════════════════════════════
//  PHASE 1: PRIZE DISTRIBUTION (1.1 + 1.2)
// ══════════════════════════════════════
//  When admin submits match results, this
//  distributes prizes + kill rewards to all
//  winners automatically via atomic batch write.
// ══════════════════════════════════════

export async function distributePrizes(matchId, matchData, resultPlayers, perKill) {
  const matchRef = doc(db, 'matches', matchId);
  const pk = Number(perKill) || 0;
  const now = new Date().toISOString();

  // Build IGN → User map from result players
  const ignList = resultPlayers.map(p => (p.ign || '').trim()).filter(Boolean);
  const userMap = {};

  if (ignList.length > 0) {
    const users = await fetchUsersByIGNs(ignList);
    users.forEach(u => {
      userMap[(u.ign || '').toLowerCase()] = u;
    });
  }

  // Atomic batch: all balance updates + transactions in one write
  const batch = writeBatch(db);
  let totalDistributed = 0;

  resultPlayers.forEach(player => {
    const positionPrize = Number(player.prize) || Number(player.positionPrize) || 0;
    const kills = Number(player.kills) || 0;
    const killPrize = pk * kills;
    const totalPrize = positionPrize + killPrize;

    if (totalPrize <= 0) return;

    totalDistributed += totalPrize;

    const user = userMap[(player.ign || '').trim().toLowerCase()];

    if (!user) {
      // Winner not found by IGN — create UNCLAIMED transaction so admin knows
      const txId = 'tx_unclaimed_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      batch.set(doc(db, 'transactions', txId), {
        id: txId,
        userId: 'unknown',
        username: player.ign || 'Unknown',
        ign: player.ign || '',
        type: 'win',
        amount: totalPrize,
        desc: `Prize: ${matchData.title} (#${player.position}) — UNCLAIMED (User not registered)`,
        matchId: matchId,
        date: now,
        status: 'completed',
        position: player.position,
        kills: kills,
        positionPrize: positionPrize,
        killPrize: killPrize,
      });
      return;
    }

    // Update user balance + stats
    const currentBalance = user.balance || 0;
    batch.update(doc(db, 'users', user.id), {
      balance: currentBalance + totalPrize,
      wins: (user.wins || 0) + (player.position === 1 ? 1 : 0),
      earnings: (user.earnings || 0) + totalPrize,
    });

    // Create win transaction
    const txId = 'tx_win_' + Date.now() + '_' + user.id.slice(0, 8);

    let desc = `Prize: ${matchData.title}`;
    if (player.position === 1) desc += ' (🥇 1st Place)';
    else if (player.position === 2) desc += ' (🥈 2nd Place)';
    else if (player.position === 3) desc += ' (🥉 3rd Place)';
    else desc += ` (#${player.position} Place)`;
    if (killPrize > 0) desc += ` + ${kills} kills (${killPrize} TK)`;

    batch.set(doc(db, 'transactions', txId), {
      id: txId,
      userId: user.id,
      username: user.name || user.displayName || user.ign,
      ign: user.ign || '',
      type: 'win',
      amount: totalPrize,
      desc: desc,
      matchId: matchId,
      date: now,
      status: 'completed',
      position: player.position,
      kills: kills,
      positionPrize: positionPrize,
      killPrize: killPrize,
    });
  });

  // Update match document with distribution data
  batch.update(matchRef, {
    result: {
      submittedAt: now,
      players: resultPlayers,
    },
    prizeDistributed: (matchData.prizeDistributed || 0) + totalDistributed,
  });

  await batch.commit();

  return { totalDistributed, unclaimed: resultPlayers.length - Object.keys(userMap).length };
}

// ══════════════════════════════════════
//  PHASE 1: MATCH CANCELLATION + REFUND (1.4)
// ══════════════════════════════════════
//  Cancels match and refunds entry fee to
//  ALL participants via atomic batch write.
// ══════════════════════════════════════

export async function cancelMatchAndRefund(matchId, matchData, adminName) {
  const matchRef = doc(db, 'matches', matchId);
  const participants = matchData.participants || [];
  const entryFee = Number(matchData.entryFee) || 0;
  const now = new Date().toISOString();

  if (participants.length === 0) {
    await updateDoc(matchRef, { status: 'cancelled', cancelledAt: now });
    return { refunded: 0, count: 0 };
  }

  // Fetch all participants in ONE batch read (not N separate reads)
  const users = await fetchUsersByIds(participants);

  const batch = writeBatch(db);
  let refundedTotal = 0;
  let refundCount = 0;

  for (const user of users) {
    const newBalance = (user.balance || 0) + entryFee;
    batch.update(doc(db, 'users', user.id), { balance: newBalance });
    refundedTotal += entryFee;
    refundCount++;

    // Create refund transaction
    const txId = 'tx_refund_' + Date.now() + '_' + user.id.slice(0, 8);
    batch.set(doc(db, 'transactions', txId), {
      id: txId,
      userId: user.id,
      username: user.name || user.displayName || 'Unknown',
      ign: user.ign || '',
      type: 'refund',
      amount: entryFee,
      desc: `Refund: ${matchData.title} (Match cancelled by ${adminName || 'Admin'})`,
      matchId: matchId,
      date: now,
      status: 'completed',
    });
  }

  // Update match document
  batch.update(matchRef, {
    status: 'cancelled',
    cancelledAt: now,
    cancelledBy: adminName || 'Admin',
    refundCount: refundCount,
    refundTotal: refundedTotal,
  });

  await batch.commit();

  return { refunded: refundedTotal, count: refundCount };
}

// ══════════════════════════════════════
//  PHASE 1: DUPLICATE TXID CHECK (1.7)
// ══════════════════════════════════════
//  Prevents users from submitting the same
//  bKash TrxID twice for free money.
//  Returns true if duplicate found.
// ══════════════════════════════════════

export async function checkDuplicateTXID(txId) {
  if (!txId || txId.trim().length < 4) return false;

  const col = collection(db, 'addMoneyRequests');
  const q = query(col, where('txId', '==', txId.trim().toUpperCase()));
  const snap = await getDocs(q);
  return !snap.empty;
}

// ══════════════════════════════════════
//  PHASE 1: ADMIN BALANCE ADJUST + TX LOG (1.9 + 1.10)
// ══════════════════════════════════════
//  When admin manually adjusts a user's balance,
//  this creates a proper transaction record.
//  Prevents "invisible" balance changes.
// ══════════════════════════════════════

export async function adminAdjustBalance(userId, amount, reason, adminName) {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) throw new Error('User not found');

  const userData = userSnap.data();
  const newBalance = Math.max(0, (userData.balance || 0) + amount);
  const now = new Date().toISOString();

  // Update balance
  await updateDoc(userRef, { balance: newBalance });

  // Create transaction record
  const txId = 'tx_admin_' + Date.now() + '_' + userId.slice(0, 8);
  await setDoc(doc(db, 'transactions', txId), {
    id: txId,
    userId: userId,
    username: userData.name || userData.displayName || 'Unknown',
    ign: userData.ign || '',
    type: amount > 0 ? 'admin_add' : 'admin_deduct',
    amount: Math.abs(amount),
    desc: `Admin ${adminName || 'System'}: ${reason || 'Balance adjustment'} (${amount > 0 ? 'Added' : 'Deducted'})`,
    date: now,
    status: 'completed',
    adminName: adminName,
  });

  return newBalance;
}