import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Login.module.css'


function Login(props) {
  return (
    <Nav className={styles.wrap}>
      <Nav.Link className={styles.lo} href="#deets">Sign in</Nav.Link>
      <Nav.Link className={styles.ic} href="#deets">
        <button type='button' className={styles.keeper}></button>
      </Nav.Link>
      <Nav.Link className={styles.ic} href="#deets"> 
      <button type='button' className={styles.keeper}></button>
    </Nav.Link>
      <Nav.Link className={styles.lo} eventKey={2} href="#memes">
      Sign up
      </Nav.Link>
    </Nav>
  );
}

export default Login;
