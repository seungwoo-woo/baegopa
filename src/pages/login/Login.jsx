import React, { useState } from 'react';
import { firebaseConfig } from '../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


function Login(props) {

  const [ newUserEmail, setNewUserEmail ] = useState('');
  const [ newUserPassword, setNewUserPassWord ] = useState('');
  
  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassWord ] = useState('');




  const signIn = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }


  const logIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  


  return (
    <>
      <div>
        <h3>Login</h3>
        <input type="text" onChange={(e) => {
          setUserEmail(e.target.value);
        }} />
        <input type="text" onChange={(e) => {
          setUserPassWord(e.target.value);
        }} />
        <button onClick={logIn}></button>

        <div>{user?.email}</div>

      </div>
    
    </>
)
  
}

export default Login;