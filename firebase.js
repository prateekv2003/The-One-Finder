// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYouhFiJKEkcUooqsyZHaGfVj9akFM5Gs",
    authDomain: "reflactions.firebaseapp.com",
    projectId: "reflactions",
    storageBucket: "reflactions.appspot.com",
    messagingSenderId: "415434136930",
    appId: "1:415434136930:web:fb6f3a089f85467c7ca03b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
const storage = getStorage();

export default app;
export { storage };