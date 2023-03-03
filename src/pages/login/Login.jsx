import React, {useState } from 'react';
import 'firebase/compat/auth';
import { firebaseConfig } from '../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, getRedirectResult } from "firebase/auth";

function Login(props) {

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);

  console.log(user);

  const handleSignin = () => {
    
    signInWithPopup(auth, provider)
    
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      console.log(result.user);
      console.log(token);
      console.log(auth.currentUser);

      setUser(result.user.displayName);      
      // ...


    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  }


  const handleSignout = () => { 
    signOut(auth).then(() => {
      console.log(user);
      console.log('Sign out');
      console.log(auth.currentUser);
      setUser(auth.currentUser);
      

    });

  }
  

  return (
    <div>
      <h1>Welcome to My Awesome App</h1>
      <button onClick={handleSignin}>Sign in</button>
      <button onClick={handleSignout}>Sign out</button>
      <h1>{user}</h1>
    </div>
  );
}

export default Login;