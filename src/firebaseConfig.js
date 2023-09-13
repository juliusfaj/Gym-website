// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmS6_BUa5F3hdgtDesMZx0cCUr2XGtxLM",
  authDomain: "fir-tutorial-7964b.firebaseapp.com",
  projectId: "fir-tutorial-7964b",
  storageBucket: "fir-tutorial-7964b.appspot.com",
  messagingSenderId: "322674205472",
  appId: "1:322674205472:web:dfcb370743bab25ed96d45",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const storage = getStorage(app);
