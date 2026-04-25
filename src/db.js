import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

// ════════════════════════════════════════
//  USER DOCUMENTS
// ════════════════════════════════════════

// Fetch a single user's data from Firestore
export async function fetchUser(uid) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    return userSnap.data();
  }
  return null;
}

// Create a new user in Firestore when they first log in
export async function createUser(uid, data) {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, {
    ...data,
    balance: 0,
    kills: 0,
    wins: 0,
    matchesPlayed: 0,
    earnings: 0,
    banned: false,
    status: 'active',
    createdAt: new Date().toISOString()
  });
}

// Update specific fields of a user (like balance, stats)
export async function updateUser(uid, data) {
  const userRef = doc(db, 'users', uid);
  await updateDoc(userRef, data);
}