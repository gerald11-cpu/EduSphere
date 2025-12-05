// src/firebaseAuth.js
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChWhJDmxY4fe9JpmkF3lvE_GR1-CU0zH4",
  authDomain: "course-management-1-7b691.firebaseapp.com",
  projectId: "course-management-1-7b691",
  storageBucket: "course-management-1-7b691.appspot.com",
  messagingSenderId: "853970852578",
  appId: "1:853970852578:web:6128e9fb0b59a5a2e29cbb",
};

// Prevent Duplicate Firebase Initialisation
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const googleLogin = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
