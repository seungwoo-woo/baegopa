import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Login.module.css'


function Login(props) {
  return (
    <Nav className={styles.wrap}>
      <Nav.Link className={styles.lo} href="#deets">로그인</Nav.Link>
      <Nav.Link className={styles.ic} href="#deets">
        <button type='button' className={styles.keeper}></button>
      </Nav.Link>
      <Nav.Link className={styles.ic} href="#deets"> 
      <button type='button' className={styles.keeper}></button>
    </Nav.Link>
      <Nav.Link className={styles.lo} eventKey={2} href="#memes">
        회원가입
      </Nav.Link>
    </Nav>
  );
}

export default Login;
