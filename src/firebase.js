// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyASjqqk376Zwg7fnNzi62wr4Of66w1_F40",

  authDomain: "todo-b92f9.firebaseapp.com",

  projectId: "todo-b92f9",

  storageBucket: "todo-b92f9.appspot.com",

  messagingSenderId: "27629152575",

  appId: "1:27629152575:web:544081c635ea55d3bb8b8a",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
