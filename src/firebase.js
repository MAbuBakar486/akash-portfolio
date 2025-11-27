// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANQ9uLholyEj1vdErk8rfzMcWJc2Aemd8",
  authDomain: "thejourneyloop-d7e01.firebaseapp.com",
  projectId: "thejourneyloop-d7e01",
  storageBucket: "thejourneyloop-d7e01.firebasestorage.app",
  messagingSenderId: "774864837813",
  appId: "1:774864837813:web:925bb66dfa0c92d29572fc",
  measurementId: "G-ZGQJ4YNHJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);


