import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChWhJDmxY4fe9JpmkF3lvE_GR1-CU0zH4",
  authDomain: "course-management-1-7b691.firebaseapp.com",
  projectId: "course-management-1-7b691",
  storageBucket: "course-management-1-7b691.appspot.com",
  messagingSenderId: "853970852578",
  appId: "1:853970852578:web:6128e9fb0b59a5a2e29cbb",
};

// Prevent duplicate initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

console.log("🔥 Firebase initialized"); // debug

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
