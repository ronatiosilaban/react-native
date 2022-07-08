// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALNecfZmIKFIApJEz6W41KG5bPSn9GEgg",
    authDomain: "reacttodos-f7cdf.firebaseapp.com",
    projectId: "reacttodos-f7cdf",
    storageBucket: "reacttodos-f7cdf.appspot.com",
    messagingSenderId: "1057015570382",
    appId: "1:1057015570382:web:d34d16d60cfff3e5ee959f",
    measurementId: "G-NCW5RC7D6W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
