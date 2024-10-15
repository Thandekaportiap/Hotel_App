// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXEpP7ik5GuWQ2KK-stxJTkw79pQZ8KAk",
  authDomain: "awbooking-164e5.firebaseapp.com",
  projectId: "awbooking-164e5",
  storageBucket: "awbooking-164e5.appspot.com",
  messagingSenderId: "768114288072",
  appId: "1:768114288072:web:203d920e0b1d07df400cfd",
  measurementId: "G-44DC21TW3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();
export const db=getFirestore(app);
export default app;
