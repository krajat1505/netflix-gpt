// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj64dLF9vqHPjvnB0oNcbinbkf5OsnTKs",
  authDomain: "netflix-558cc.firebaseapp.com",
  projectId: "netflix-558cc",
  storageBucket: "netflix-558cc.appspot.com",
  messagingSenderId: "676810534489",
  appId: "1:676810534489:web:1030341da26bf4f53f4b48",
  measurementId: "G-0180RYSH8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
