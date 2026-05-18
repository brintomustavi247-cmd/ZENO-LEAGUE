/**
 * Lazy Firebase Loader - Phase 4 Performance Optimization
 * 
 * Defers Firebase module loading until actually needed.
 * This reduces initial bundle size by ~80-120 KB.
 * 
 * USAGE:
 *   import { lazyAuth, lazyFirestore } from './firebase.lazy'
 *   
 *   // In a click handler or effect:
 *   const auth = await lazyAuth()
 *   const db = await lazyFirestore()
 */

let authModule = null;
let firestoreModule = null;
let firebaseModule = null;

/**
 * Lazy load Firebase Auth module
 * @returns {Promise<firebase.auth.Auth>}
 */
export async function lazyAuth() {
  if (!authModule) {
    const { getAuth } = await import('firebase/auth');
    const { firebaseApp } = await import('./firebase');
    authModule = getAuth(firebaseApp);
  }
  return authModule;
}

/**
 * Lazy load Firebase Firestore module
 * @returns {Promise<firebase.firestore.Firestore>}
 */
export async function lazyFirestore() {
  if (!firestoreModule) {
    const { getFirestore } = await import('firebase/firestore');
    const { firebaseApp } = await import('./firebase');
    firestoreModule = getFirestore(firebaseApp);
  }
  return firestoreModule;
}

/**
 * Lazy load Firebase app
 * @returns {Promise<firebase.app.App>}
 */
export async function lazyFirebaseApp() {
  if (!firebaseModule) {
    const { firebaseApp } = await import('./firebase');
    firebaseModule = firebaseApp;
  }
  return firebaseModule;
}

/**
 * Batch load multiple Firebase modules at once
 * Use when you need both Auth and Firestore
 */
export async function lazyFirebaseModules() {
  return Promise.all([
    lazyAuth(),
    lazyFirestore(),
  ]);
}
