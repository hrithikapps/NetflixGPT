// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHuodz-0mYav3Gw7QOemHqV0XJ63KfBbI",
  authDomain: "netflixgpt-f318d.firebaseapp.com",
  projectId: "netflixgpt-f318d",
  storageBucket: "netflixgpt-f318d.appspot.com",
  messagingSenderId: "110348611486",
  appId: "1:110348611486:web:9b05f00bda0c509a4e708f",
  measurementId: "G-3NNW0CGQT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
