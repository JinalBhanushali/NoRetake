// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkzLp8qPxvf6bpzo_xJAm_yrblebR1HaM",
  authDomain: "noretakes-fbb4c.firebaseapp.com",
  projectId: "noretakes-fbb4c",
  storageBucket: "noretakes-fbb4c.firebasestorage.app",
  messagingSenderId: "24028662037",
  appId: "1:24028662037:web:90a4b18c88efcf99cbc11c",
  measurementId: "G-CEYGF56F1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };