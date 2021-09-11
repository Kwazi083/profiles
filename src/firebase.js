import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv8kBQFalJ34Pp7Ir2OBxTPz5UHTiT6PA",
    authDomain: "profiles-c81b2.firebaseapp.com",
    projectId: "profiles-c81b2",
    storageBucket: "profiles-c81b2.appspot.com",
    messagingSenderId: "166268632191",
    appId: "1:166268632191:web:ba4a8bb3aaeb537c53d34a"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
