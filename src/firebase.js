import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADV3HOJODpgYyZfJmof16DM6T9IJ6GgBI",
  authDomain: "clutch-arena-bd.firebaseapp.com",
  projectId: "clutch-arena-bd",
  storageBucket: "clutch-arena-bd.firebasestorage.app",
  messagingSenderId: "173752162789",
  appId: "1:173752162789:web:1af9399599095de518f70c",
  measurementId: "G-4BPNGYRYM5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Wait for persistence before doing anything
export const firebaseReady = setPersistence(auth, browserLocalPersistence)
  .then(() => true)
  .catch(() => true);

export { auth, onAuthStateChanged };
export default app;