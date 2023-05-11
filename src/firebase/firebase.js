// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqJY5ZeZpnpZwjnlWjJ40IPtfQUYSfmRo",
  authDomain: "tree-notes2.firebaseapp.com",
  projectId: "tree-notes2",
  storageBucket: "tree-notes2.appspot.com",
  messagingSenderId: "997973008915",
  appId: "1:997973008915:web:a62d6d71c527705c03d5e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
