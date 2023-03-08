import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Login.module.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from '../../login/Signin';

function Login(props) {
  const [vis, setVis] = useState(true);
  const [user, setUser] = useState('');
  function handleClick() {
    setVis(!vis);
  }

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
        <Nav.Link
          className={styles.my}
          href="#deets"
          style={{ display: vis ? 'none' : 'block' }}
        ></Nav.Link>
        <Nav.Link
          className={styles.out}
          href="#141414ts"
          style={{ display: vis ? 'none' : 'block' }}
        >
          Log out
        </Nav.Link>
        
      </div>
    </Nav>
  );
}

export default Login;
