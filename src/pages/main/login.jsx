import React from 'react';
import { Nav } from 'react-bootstrap';

function Login(props) {
  return (
    <Nav>
    <Nav.Link href="#deets">로그인</Nav.Link>
    <Nav.Link eventKey={2} href="#memes">
      회원가입
    </Nav.Link>
  </Nav>
  );
}

export default Login;