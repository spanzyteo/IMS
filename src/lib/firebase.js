// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmi3LjfpwUoiKclf3Dd_nmHyOjSDdp22s",
  authDomain: "project-cartly.firebaseapp.com",
  projectId: "project-cartly",
  storageBucket: "project-cartly.appspot.com",
  messagingSenderId: "665562041301",
  appId: "1:665562041301:web:82db3521b62013e98ecb5c",
  measurementId: "G-TC0BVNHGJN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// const analytics = getAnalytics(app);