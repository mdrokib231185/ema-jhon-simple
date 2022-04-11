// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XE_aA_rcutOgmQKMDNRURJiQqF_OF14",
  authDomain: "ema-jhon-simple-8e835.firebaseapp.com",
  projectId: "ema-jhon-simple-8e835",
  storageBucket: "ema-jhon-simple-8e835.appspot.com",
  messagingSenderId: "867784658996",
  appId: "1:867784658996:web:3b7fa6cfb69815af4bfa61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth