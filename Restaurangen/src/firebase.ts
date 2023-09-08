// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPOxao1iuejSVixn6y4Kv4qV8wBGTu0Xs",
  authDomain: "test-f3b66.firebaseapp.com",
  projectId: "test-f3b66",
  storageBucket: "test-f3b66.appspot.com",
  messagingSenderId: "260552511262",
  appId: "1:260552511262:web:f255ee31e1b544d64ec30f",
  measurementId: "G-9THMQ2HK68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);