
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4iVNrjQLIzpE5-7Qub06ug_R-0u7idWk",
  authDomain: "daketun---proyecto-final-react.firebaseapp.com",
  projectId: "daketun---proyecto-final-react",
  storageBucket: "daketun---proyecto-final-react.appspot.com",
  messagingSenderId: "351481161465",
  appId: "1:351481161465:web:2f050c1fd82ab37bdc2428"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
