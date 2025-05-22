// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUE0WoISl9-SvbK6SMBw3xx1ny6H7Wu04",
  authDomain: "m56-5-coffee-store.firebaseapp.com",
  projectId: "m56-5-coffee-store",
  storageBucket: "m56-5-coffee-store.firebasestorage.app",
  messagingSenderId: "970428197226",
  appId: "1:970428197226:web:bbe9c67b69b805d880dd13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
