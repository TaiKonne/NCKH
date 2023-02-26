import { initializeApp } from 'firebase/app'
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    //read data from Firebase    
} from "firebase/auth"
//ref = reference to a "collection"
import {
    getDatabase,
    ref as firebaseDatabaseRef,
    set as firebaseSet,
    child,
    get,
    onValue,
} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyC4eaI59AwaM4NOjcwR6hPjq5n-Wan5IP4",
    authDomain: "tdmusocialmedia.firebaseapp.com",
    databaseURL: "https://tdmusocialmedia-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tdmusocialmedia",
    storageBucket: "tdmusocialmedia.appspot.com",
    appId: '1:168933054384:android:3a11407af4288a85d8e875',
    messagingSenderId: "168933054384",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()

export {
    auth,
    firebaseDatabase
}