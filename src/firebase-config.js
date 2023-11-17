// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUrlXZyLAbZclhy7T4y4YzdqbR-AXmz1Q",
  authDomain: "chatapp-e7c20.firebaseapp.com",
  projectId: "chatapp-e7c20",
  storageBucket: "chatapp-e7c20.appspot.com",
  messagingSenderId: "518471926910",
  appId: "1:518471926910:web:a1b98ad50276184c25442f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);