import { initializeApp } from "firebase/app";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

//initialize firebase
const FirebaseInitial=()=>{
    initializeApp(firebaseConfig);
}


export default FirebaseInitial;