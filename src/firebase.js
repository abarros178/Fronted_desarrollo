// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsc7qVJOD0LsppOutXZAvY17SfJyCO0XE",
  authDomain: "digimon-34770.firebaseapp.com",
  projectId: "digimon-34770",
  storageBucket: "digimon-34770.appspot.com",
  messagingSenderId: "137933923394",
  appId: "1:137933923394:web:e7ea5b09eecd50d893b9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
export {db};