import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdWyyDkq8cSeDQaApPw9KKcUcnPUWqVNw",
  authDomain: "zeno-league.firebaseapp.com",
  projectId: "zeno-league",
  storageBucket: "zeno-league.firebasestorage.app",
  messagingSenderId: "321430657372",
  appId: "1:321430657372:web:bc996a439cc2faaec48999",
  measurementId: "G-R1X7XYQ2ES"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Wait for persistence before doing anything
export const firebaseReady = setPersistence(auth, browserLocalPersistence)
  .then(() => true)
  .catch(() => true);

export { auth, onAuthStateChanged, db };
export default app;