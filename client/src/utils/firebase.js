import { getAuth } from 'firebase/auth'
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyC7me_7UTXxFwQzBWqh63OamR6eI4WHc9g",
  authDomain:"tunisianautotrek.firebaseapp.com",
  projectId:"tunisianautotrek",
  storageBucket: "tunisianautotrek.appspot.com",
  messagingSenderId: "984697918319",
  appId: "984697918319:web:1c1be582d5165601560e9a"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);