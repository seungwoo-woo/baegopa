import React, { useState } from 'react';
import { firebaseConfig } from '../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Signin(props) {

  const [ userEmail, setUserEmail ] = useState('');
  const [ userPassword, setUserPassWord ] = useState('');
  const [ user, setUser ] = useState('');

  const handleSignin = () => {
    const auth = getAuth();
    console.log(auth);
    console.log(userEmail);
    console.log(userPassword);

    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        console.log('1');
        setUser(userCredential.user);    
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      });
  }  


  return (
    <>
      <div >
        <h3>Sign in</h3>
        <input type="text" onChange={(e) => {
          setUserEmail(e.target.value);
        }} placeholder='email' />
        <br/>
        <input type="password" onChange={(e) => {
          setUserPassWord(e.target.value);
        }} placeholder='password' />
        <br/>
        <button onClick={handleSignin}>Sign in</button>
        <div>{user?.email}</div>

      </div>    
    </>
);
  
}

export default Signin;