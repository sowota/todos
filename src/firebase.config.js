

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWe_9yw15Cl_iN5QZV3Ndi4yH0cco9Wo0",
  authDomain: "todolist-21.firebaseapp.com",
  projectId: "todolist-21",
  storageBucket: "todolist-21.appspot.com",
  messagingSenderId: "506889150076",
  appId: "1:506889150076:web:8203f3fc12086944acf3f9",
  measurementId: "G-246X2CJGHM"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // doesnt include database
//const db = app.firestore()
const db = getFirestore(app);


export {db}