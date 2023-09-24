// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUBLWezlu59P_YhSLlkik-ylCHvgxqyGU",
  authDomain: "next-blog-app-909b8.firebaseapp.com",
  projectId: "next-blog-app-909b8",
  storageBucket: "next-blog-app-909b8.appspot.com",
  messagingSenderId: "850117451139",
  appId: "1:850117451139:web:583961b9e145a68d552ab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);