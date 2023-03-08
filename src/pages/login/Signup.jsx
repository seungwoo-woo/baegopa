import React, { useState } from 'react';
import { firebaseConfig } from '../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useParams } from 'react-router-dom';
import styles from "./Login.module.css";

// Initialize Firebase 회원가입 페이지
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
    alert('비밀번호를 확인하세요!');
  }


}


return (
  <>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>회원가입</h1>

    <div className={styles.from}>
      <h3>아이디</h3>
      <input type="email" onChange={(e) => {
        setNewUserEmail(e.target.value);
      }} placeholder='example@naver.com' maxlength = "30"/>
    </div>

    <div className={styles.from}>
    <h3>비밀번호</h3>
      <input type="password" onChange={(e) => {
        setNewUserPassWord(e.target.value);
      }} placeholder='password'  maxlength = "12"/>
      <p>6자 이상 입력해주세요.</p>
      </div>

    <div className={styles.from}>  
    <h3>비밀번호 확인</h3>

      <input type="password" onChange={(e) => {
        setNewUserPassWord2(e.target.value);
      }} placeholder='Confirm password'  maxlength = "12"/>
      </div>

      <div className={styles.login}>
      <button onClick={handleSignup}>가입하기</button>
      </div>
      <div>{user?.email}</div>
      

    </div>    
  </>
)

}

export default Signup;