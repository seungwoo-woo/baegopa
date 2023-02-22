import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Login.module.css'
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";

const BtnStyled = styled.button`
  background-image: url();
`
function Login(props) {
  return (
    <Nav className={styles.wrap}>
    <Nav.Link className={styles.lo} href="#deets">로그인</Nav.Link>
    <Nav.Link className={styles.ic} href="#deets"> <h4><button></button></h4></Nav.Link>
    <Nav.Link className={styles.ic} href="#deets"> <h4><CgProfile/></h4></Nav.Link>
    
    <Nav.Link className={styles.lo} eventKey={2} href="#memes">
      회원가입
    </Nav.Link>
  </Nav>
  );
}

export default Login;