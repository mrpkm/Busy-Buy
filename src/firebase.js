import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBUXjLPVNEgnfLdWl_d7y2zYkfH155peJ4",
    authDomain: "busy-buy-8805b.firebaseapp.com",
    projectId: "busy-buy-8805b",
    storageBucket: "busy-buy-8805b.appspot.com",
    messagingSenderId: "114942941922",
    appId: "1:114942941922:web:b9ef55f6f72277e7fd9cbb"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);