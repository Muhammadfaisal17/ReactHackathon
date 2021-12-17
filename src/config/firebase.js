import { initializeApp } from "firebase/app";
// Authentication 
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
//Database
import {getDatabase, onChildAdded, child, ref, push, update, set} from "firebase/database";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZmBebqKMWH9TBeWE3IiAajQSGJJ_jdiE",
    authDomain: "react-project-a4eea.firebaseapp.com",
    projectId: "react-project-a4eea",
    storageBucket: "react-project-a4eea.appspot.com",
    messagingSenderId: "530463565245",
    appId: "1:530463565245:web:c19bb8e8393cde532c1ed4",
    measurementId: "G-BJKHC89XFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,
  database,onChildAdded, child, ref, push, update, set
}