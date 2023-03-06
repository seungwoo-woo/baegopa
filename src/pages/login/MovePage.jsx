import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


function MovePage(props) {

  const [ signinUser, setSigninUser ] = useState('1');

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSigninUser(user.email);
    } else {
      setSigninUser(user);
    }
  }); 

  const handleSignout = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('signout');

    }).catch((error) => {
      // An error happened.
    });

  }

  return (
    <div>
      {signinUser}
      <button onClick={handleSignout}>Sign out</button>
    </div>
  );
}

export default MovePage;