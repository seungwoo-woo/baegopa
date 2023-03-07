import React, { useState } from 'react';
import { firebaseConfig } from '../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useParams } from 'react-router-dom';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Signup(props) {

  const [ newUserEmail, setNewUserEmail ] = useState('');
  const [ newUserPassword, setNewUserPassWord ] = useState(''); 
  const [ newUserPassword2, setNewUserPassWord2 ] = useState('');  

  const [ user, setUser ] = useState('');



  const handleSignup = () => {
    const auth = getAuth();
    console.log(auth);
    console.log(newUserEmail);
    console.log(newUserPassword);

    if (newUserPassword === newUserPassword2) {
      createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);    
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
    } else {
      alert('패스워드를 확인하세요!');
    }


  }


  return (
    <>
      <div >
        <h3>Sign up</h3>
        <input type="text" onChange={(e) => {
          setNewUserEmail(e.target.value);
        }} placeholder='email' />
        <br/>
        <input type="password" onChange={(e) => {
          setNewUserPassWord(e.target.value);
        }} placeholder='password' />
        <br/>
        <input type="password" onChange={(e) => {
          setNewUserPassWord2(e.target.value);
        }} placeholder='password' />
        <br/>
        <button onClick={handleSignup}>Sign up</button>

        <div>{user?.email}</div>

      </div>    
    </>
)
  
}

export default Signup;