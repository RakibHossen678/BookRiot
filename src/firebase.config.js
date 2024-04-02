// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnduCxAJYBeezFwF0J6HPrfaDwkVwkkwU",
  authDomain: "bookriot-a60ae.firebaseapp.com",
  projectId: "bookriot-a60ae",
  storageBucket: "bookriot-a60ae.appspot.com",
  messagingSenderId: "550189691283",
  appId: "1:550189691283:web:03eebdb68d54f1df4e3866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;