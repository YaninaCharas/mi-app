// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1H86tUyq7itWDaznfM8UUL0TbQnvfO3E",
  authDomain: "app-react-45090.firebaseapp.com",
  projectId: "app-react-45090",
  storageBucket: "app-react-45090.appspot.com",
  messagingSenderId: "600955530049",
  appId: "1:600955530049:web:ceda928c7854efeb37cfc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
