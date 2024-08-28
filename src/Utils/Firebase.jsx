// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPYpJB8M8ITF4QuQIW5HhUk1pgpcmdHyA",
  authDomain: "netflixgpt-73a09.firebaseapp.com",
  projectId: "netflixgpt-73a09",
  storageBucket: "netflixgpt-73a09.appspot.com",
  messagingSenderId: "549149171270",
  appId: "1:549149171270:web:0f27af3091117ab081f447",
  measurementId: "G-VN0VLCBWG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();