
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE1TJvuu8k0YJJyfPpUr6q4IE-swNnWEc",
  authDomain: "react-firebase-assignmen-34a8c.firebaseapp.com",
  projectId: "react-firebase-assignmen-34a8c",
  storageBucket: "react-firebase-assignmen-34a8c.firebasestorage.app",
  messagingSenderId: "14752065555",
  appId: "1:14752065555:web:af07ef8e239e6d59fb77e6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
