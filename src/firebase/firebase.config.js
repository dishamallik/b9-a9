
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDXFEHc5h6JLie4M3c6kfAoI-WpPv_m7YI",
  authDomain: "b9a9-real-estate-caded.firebaseapp.com",
  projectId: "b9a9-real-estate-caded",
  storageBucket: "b9a9-real-estate-caded.appspot.com",
  messagingSenderId: "24512710850",
  appId: "1:24512710850:web:fc48ec1a60e052eabf935b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth(app);
export default auth;

