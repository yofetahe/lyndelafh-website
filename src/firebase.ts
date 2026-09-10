// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
  // apiKey: "AIzaSyDHws5HsYZzqYdBI-pagbuLllynUGPjzJ4",
  // authDomain: "lyndel-afh.firebaseapp.com",
  // databaseURL: "https://lyndel-afh-default-rtdb.firebaseio.com",
  // projectId: "lyndel-afh",
  // storageBucket: "lyndel-afh.firebasestorage.app",
  // messagingSenderId: "1036948105920",
  // appId: "1:1036948105920:web:bd3c655ada973c97b5db25",
  // measurementId: "G-LHXK74GHF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Realtime Database and export it
export const db = getDatabase(app);

export const auth = getAuth(app);