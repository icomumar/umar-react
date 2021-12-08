import { initializeApp } from "firebase/app";
import react from 'react';
import firebase from  'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBkLAGYwJQLSu4THULO0j4CySADIOQUqVY",

  authDomain: "reactumar-219e9.firebaseapp.com",

  projectId: "reactumar-219e9",

  storageBucket: "reactumar-219e9.appspot.com",

  messagingSenderId: "657147860184",

  appId: "1:657147860184:web:3d116a5b2419727c1bf3ad"

};


// Initialize Firebase

const config = firebase.initializeApp(firebaseConfig);
console.log("config ==> ",config);
export const auth  = config.auth;
export default config;