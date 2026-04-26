import { doc, getDoc, setDoc, updateDoc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore';
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
  // 1. Mark request as approved
  const reqRef = doc(db, 'addMoneyRequests', requestId);
  await updateDoc(reqRef, { status: 'approved', processedAt: new Date().toISOString() });

  // 2. Add money to user's balance in Firestore
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