import { GoogleAuthProvider,getAuth,updateProfile,signInWithPopup,onAuthStateChanged, signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

import {useEffect, useState} from 'react'
import FirebaseInitial from "../Firebase/FirebaseIntial/FirebaseInitialize";
FirebaseInitial()

const useFirebase=()=>{
    const [user,setUser]=useState({})

    const auth = getAuth();
    //goggle sign in
    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
    
    const user = result.user;
    setUser(user);

  }).catch((error) => {
   console.log(error.message);
  });
    }

    //logout 
    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
          console.log(error.message)
          });
    }
    //signup with email password
    const signUp=(name,email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    setUser(user)
    updateProfile(auth.currentUser, {
      displayName: name,
  }).then(() => {

  }).catch((error) => {
      console.log(error)
      alert(error.message)
  });
  })
  .catch((error) => {
   console.log(error.message)
   alert(error.message)
  });
    }
    const signIn=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)
    //alert(error.message)
  })
  .catch((error) => {
    console.log(error.message)
    alert(error.message)
  });
    }
    //user exist or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
            
              setUser(user)
            } else {
              setUser({})
            }
          });
    },[])
    return {
        googleSignIn,
        logOut,
        signUp,
        signIn,
        user,

    }
}




export default useFirebase;