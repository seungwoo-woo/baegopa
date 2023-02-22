import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Login.module.css'
import { BsBookmarkPlus } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
function Login(props) {
  return (
    <Nav className={styles.wrap}>
    <Nav.Link className={styles.lo} href="#deets">로그인</Nav.Link>
    <Nav.Link className={styles.ic} href="#deets"> <h4><BsBookmarkPlus/></h4></Nav.Link>
    <Nav.Link className={styles.ic} href="#deets"> <h4><CgProfile/></h4></Nav.Link>
    
    <Nav.Link className={styles.lo} eventKey={2} href="#memes">
      회원가입
    </Nav.Link>
  </Nav>
  );
}

export default Login;