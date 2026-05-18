// ════════════════════════════════════════
// ⚡ FIREBASE INITIALIZATION V3.0 (FINAL)
// ════════════════════════════════════════
// ✅ Persistence called SYNCHRONOUSLY (no more "already started" error)
// ✅ Permission debugging added (helps diagnose rule issues)
// ✅ Clean console output (suppressed deprecation noise)

import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// ════════════════════════════════════════
// CONFIGURATION
// ════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyBdWyyDkq8cSeDQaApPw9KKcUcnPUWqVNw",
  authDomain: "zeno-league.firebaseapp.com",
  projectId: "zeno-league",
  storageBucket: "zeno-league.firebasestorage.app",
  messagingSenderId: "321430657372",
  appId: "1:321430657372:web:bc996a439cc2faaec48999",
  measurementId: "G-R1X7XYQ2ES"
};

const isDev = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

if (isDev) {
  console.log('🔧 Running in DEVELOPMENT mode');
  console.log('📦 Firebase Project:', firebaseConfig.projectId);
} else if (isProduction) {
  const noOp = () => {};
  console.log = noOp;
  console.warn = noOp;
}

// ════════════════════════════════════════
// CORE INITIALIZATION (Synchronous & Sequential)
// ════════════════════════════════════════
let app;
let db;
let auth;
let analytics = null;

try {
  // Step 1: Initialize app
  app = initializeApp(firebaseConfig);
  
  // Step 2: Get Firestore instance
  db = getFirestore(app);
  
  // ✅ FIX #1: Enable persistence IMMEDIATELY (synchronous, before anything else!)
  // This MUST happen before any getDoc(), onSnapshot(), collection() calls
  if (typeof window !== 'undefined') {
    enableIndexedDbPersistence(db)
      .then(() => {
        console.log('📴 Offline persistence: ENABLED');
      })
      .catch((err) => {
        // Gracefully handle known cases (not real errors)
        if (err.code === 'failed-precondition') {
          console.warn('⚠️ Persistence: Multiple tabs open (using existing cache)');
        } else if (err.code === 'unimplemented') {
          console.log('ℹ️ Persistence: Not supported (incognito/private browsing?)');
        } else {
          console.warn('⚠️ Persistence:', err.message);
        }
      });
  }
  
  // Step 3: Get Auth (after Firestore is fully configured)
  if (typeof window !== 'undefined') {
    try {
      auth = getAuth(app);
      setPersistence(auth, browserLocalPersistence)
        .then(() => console.log('🔐 Auth persistence: ENABLED'))
        .catch(err => console.warn('⚠️ Auth persistence:', err.message));
    } catch (err) {
      console.warn('⚠️ Auth init failed:', err.message || err);
    }
  }
  
  console.log('✅ Firebase core initialized');

} catch (error) {
  console.error('❌ Firebase initialization FAILED:', error);
  app = null;
  db = null;
  auth = null;
  
  if (isDev) throw error;
}

// ════════════════════════════════════════
// NON-BLOCKING ASYNC FEATURES
// ════════════════════════════════════════

export const firebaseReady = Promise.resolve(true);

if (typeof window !== 'undefined' && app) {
  
  // ─── AUTH PERSISTENCE (already handled above) ───

  // ─── ANALYTICS ───
  import('firebase/analytics').then(({ getAnalytics, isSupported }) => {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
        console.log('📊 Analytics: ACTIVE');
      }
    });
  });

  // ─── PERFORMANCE MONITORING ───
  import('firebase/performance').then(({ getPerformance }) => {
    getPerformance(app);
    console.log('⚡ Performance monitoring: ACTIVE');
  });

  // ─── APP CHECK (Security) ───
  if (isDev) {
    console.log('🛡️ App Check: SKIPPED in development (enable before production)');
    /*
    // UNCOMMENT WHEN READY FOR PRODUCTION:
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = 'YOUR_REAL_TOKEN';
    
    import('firebase/app-check').then(({ initializeAppCheck: initCheck, ReCaptchaV3Provider }) => {
      initCheck(app, {
        provider: new ReCaptchaV3Provider('YOUR_RECAPTCHA_SITE_KEY'),
        isTokenAutoRefresh: true
      }).then(() => console.log('🛡️ App Check: ACTIVE'));
    });
    */
  }
}

// ════════════════════════════════════════
// EXPORTS & UTILITIES
// ════════════════════════════════════════
export { auth, db, analytics };
export default app;

// Backwards-compatible export used by lazy loader
export const firebaseApp = app;

export const isFirebaseReady = () => app !== null && db !== null;
export const getProjectId = () => firebaseConfig.projectId;

export const safeFireOperation = async (operation, name = 'Unknown') => {
  try {
    if (!db) throw new Error('Firebase not initialized');
    return await operation();
  } catch (error) {
    console.error(`❌ [${name}]`, error);
    if (isDev) throw error;
    return null;
  }
};

console.log(`🚀 Zeno League Firebase Module Loaded`);
console.log(`   Project: ${firebaseConfig.projectId}`);
console.log(`   Status: ${app ? '✅ READY' : '❌ FAILED'}`);

// ════════════════════════════════════════
// 🔍 PERMISSION DEBUGGER (disabled by default in dev)
// Enable by setting VITE_FIRESTORE_PERMISSION_TEST=true in your .env
// ════════════════════════════════════════
if (isDev && db && import.meta.env.VITE_FIRESTORE_PERMISSION_TEST === 'true') {
  // Test read permission after 2 seconds (gives time for auth to init)
  setTimeout(async () => {
    try {
      const testDoc = await safeFireOperation(
        () => import('firebase/firestore').then(({ doc, getDoc }) => 
          getDoc(doc(db, '_test', 'permission_check'))
        ),
        'Permission Test'
      );
      
      if (testDoc && testDoc.exists()) {
        console.log('✅ Firestore permissions: OK (can read)');
      } else {
        console.log('ℹ️ Firestore permissions: Test document not found (OK if it doesn\'t exist)');
      }
    } catch (error) {
      if (error.code === 'permission-denied') {
        console.error(`
╔══════════════════════════════════════════════════════════════╗
║  🔴 FIRESTORE PERMISSION ERROR DETECTED!                     ║
╠══════════════════════════════════════════════════════════════╣
║  Your app CANNOT read data from Firestore!                   ║
║                                                              ║
║  QUICK FIX:                                                  ║
║  1. Go to: Firebase Console → Firestore → Rules             ║
║  2. Replace rules with (for development only):              ║
║                                                              ║
║  rules_version = '2';                                        ║
║  service cloud.firestore {                                   ║
║    match /databases/{database}/documents {                   ║
║      allow read, write: if true;  ← TEMPORARY FOR DEV       ║
║    }                                                         ║
║  }                                                           ║
║                                                              ║
║  3. Click "Publish"                                          ║
║  4. Refresh your app                                         ║
║                                                              ║
║  ⚠️ WARNING: 'allow read, write: if true' allows ANYONE     ║
║     to read/write your database! Change before production!   ║
╚══════════════════════════════════════════════════════════════╝
        `);
      }
    }
  }, 2000);
}