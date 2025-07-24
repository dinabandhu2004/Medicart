// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3__Yj5EfTc2C10bMgpzWYhyoeYQrdkpA",
  authDomain: "singh-one.firebaseapp.com",
  projectId: "singh-one",
  storageBucket: "singh-one.firebasestorage.app",
  messagingSenderId: "572527255331",
  appId: "1:572527255331:web:a66287e175b02adfaff696",
  measurementId: "G-DLZ7C3FY19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };