import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBYtNQXRggB1W1T2uoqE_BVtEljgcWL8Zg",
  authDomain: "react-netflix-clone-4d2d6.firebaseapp.com",
  projectId: "react-netflix-clone-4d2d6",
  storageBucket: "react-netflix-clone-4d2d6.appspot.com",
  messagingSenderId: "11206146036",
  appId: "1:11206146036:web:9874afaf84c59993a96ba1",
  measurementId: "G-KMPXKFGB12"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);