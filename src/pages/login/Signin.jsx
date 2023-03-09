import React, { useState } from 'react';
import { firebaseConfig } from '../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.css";
import KakaoLogin from "./KakaoLogin";


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
  // alert(`환영합니다❤ ${userEmail}`);


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
    <div className={styles.wrapper}>
      <h1 className={styles.title}>로그인</h1>
    
      <div className={styles.from}>
      <input type="email" onChange={(e) => {
        setUserEmail(e.target.value);
      }} placeholder='example@naver.com' maxlength = "30" onKeyUp={Signin}/>
      </div>
  
      <div className={styles.from}>
      <input type="password" onChange={(e) => {
        setUserPassWord(e.target.value);
      }} placeholder='password' maxlength = "12" onKeyUp={Signin}/>
      </div>
  

    
      <div className={styles.login}>

      <button onClick={handleSignin} className={styles.sign}>로그인</button>
=======
      {/* <Nav.Link className={styles.bttn} onClick={handleSignin} as={Link}  to={user ? '/' : '/signin'} >로그인</Nav.Link> */}

      </div>
      <div>{user?.email}</div>
      <div className={styles.option}>
        <ul>
          <li>아이디 찾기</li>
          <li>비밀번호 찾기</li>
          <li><a href='./Signup'>회원가입</a></li>
        </ul>
        {/* 쇼셜계정으로 로그인하기 */}
      </div>
      <KakaoLogin/>
      {/* 아이디 기억 체크박스만들기 */}
    </div>    
  </>
);

}

export default Signin;
