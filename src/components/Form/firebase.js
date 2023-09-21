import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNTlWWyTivOKw6USkXedm-nrlG7u0hp0Q",
  authDomain: "project-a3abb.firebaseapp.com",
  databaseURL: "https://project-a3abb-default-rtdb.firebaseio.com",
  projectId: "project-a3abb",
  storageBucket: "project-a3abb.appspot.com",
  messagingSenderId: "345849262187",
  appId: "1:345849262187:web:884e16b271d01d35ee812e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
// }

export const firestore = firebase.firestore();
