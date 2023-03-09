import { Nav } from 'react-bootstrap';
import styles from './Login.module.css'
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom'; // useHistory -> useNavigate
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';

function Login(props) {
  const [vis, setVis] = useState(true);
  const [signinUser, setSigninUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate(); // useHistory -> useNavigate

=======
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from '../../login/Signin';

function Login(props) {
  const [vis, setVis] = useState(true);
  const [user, setUser] = useState('');
>>>>>>> feature/CardCss
  function handleClick() {
    setVis(!vis);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const signinUser = user.email;
        setSigninUser(signinUser);
        setVis(false);
        navigate('/'); // useHistory -> useNavigate
      } else {
        setSigninUser(null);
        setVis(true);
      }
    });
  }

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('signout');
      setVis(true);
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <Nav className={styles.wrap}>
      <Nav.Link
        className={styles.lo}
        href="#deets"
        style={{ display: vis ? 'block' : 'none' }}
        onClick={handleClick}
        as={Link} to="/signin"
      >
        Sign in
      </Nav.Link>
      <Nav.Link
        className={styles.lo}
        href="#memes"
        style={{ display: vis ? 'block' : 'none' }}
        onClick={handleClick}
        as={Link} to="/signup"
      >
        Sign up
      </Nav.Link>
      <div className={styles.ou} style={{ display: vis ? 'none' : 'block' }}>
<<<<<<< HEAD
        {signinUser && (
          <div className={styles.ids}>
            {signinUser.split('@')[0]}님 환영합니다.
          </div>
        )}
        <Nav.Link
          className={styles.my}
          as={Link}  to="/search"
          style={{ display: vis ? 'none' : 'block' }}
        ></Nav.Link>

        <Nav.Link
          className={styles.plus}
          as={Link}  to="/add"
          style={{ display: vis ? 'none' : 'block' }}
        >
        </Nav.Link>
=======
        <Nav.Link
          className={styles.my}
          href="#deets"
          style={{ display: vis ? 'none' : 'block' }}
        ></Nav.Link>
>>>>>>> feature/CardCss
        <Nav.Link
          className={styles.out}
          href="#141414ts"
          style={{ display: vis ? 'none' : 'block' }}
<<<<<<< HEAD
          onClick={handleSignout}
        >
          Log out
        </Nav.Link>

=======
        >
          Log out
        </Nav.Link>
        
>>>>>>> feature/CardCss
      </div>
    </Nav>
  );
}

export default Login;
