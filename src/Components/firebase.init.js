import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
// Initialize Firebase
const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;