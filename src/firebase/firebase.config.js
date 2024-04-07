// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Uefdpe9DCvIPf0iCDQP420ZfmtjF3ac",
  authDomain: "react-dragon-news-1cca0.firebaseapp.com",
  projectId: "react-dragon-news-1cca0",
  storageBucket: "react-dragon-news-1cca0.appspot.com",
  messagingSenderId: "920504105749",
  appId: "1:920504105749:web:d704daf7fbe13da69f871c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;