// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtIb8p_sUCVjatS7sbL1250lns_xurUIk",
  authDomain: "noretakes-89967.firebaseapp.com",
  projectId: "noretakes-89967",
  storageBucket: "noretakes-89967.firebasestorage.app",
  messagingSenderId: "152898973478",
  appId: "1:152898973478:web:f5b42c4e9d628835411be7",
  measurementId: "G-9HXKTD2D6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };