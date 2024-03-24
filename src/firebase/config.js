// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOVcTLzLxUB8dtgmOZw6ydAPn1G-8I5eA",
    authDomain: "twitter-b0981.firebaseapp.com",
    projectId: "twitter-b0981",
    storageBucket: "twitter-b0981.appspot.com",
    messagingSenderId: "1058715501325",
    appId: "1:1058715501325:web:767fd6e07b0fd5ae8ea644"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth un referansını al
export const auth = getAuth(app);

// google sağlayıcını kurma
export const provider = new GoogleAuthProvider();

// veritabanının referansını alma
export const db = getFirestore(app);

// dosya yükleme alanının referansını al
export const storage = getStorage(app);