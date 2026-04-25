import { doc, getDoc, setDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

// ════════════════════════════════════════
//  USER DOCUMENTS
// ════════════════════════════════════════

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

// ════════════════════════════════════════
//  MATCH DOCUMENTS
// ════════════════════════════════════════

// Get ALL matches from the cloud (for the lobby)
export async function fetchMatches() {
  const matchesCol = collection(db, 'matches');
  const matchesSnap = await getDocs(matchesCol);
  return matchesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Save a brand new match to the cloud
export async function createMatchInDb(matchId, data) {
  const matchRef = doc(db, 'matches', matchId);
  await setDoc(matchRef, data);
}

// Update a match (join count, room id, result, etc)
export async function updateMatchInDb(matchId, data) {
  const matchRef = doc(db, 'matches', matchId);
  await updateDoc(matchRef, data);
}