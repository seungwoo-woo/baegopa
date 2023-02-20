import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";

function Header(props) {
  return (
      {/* 헤어 영역: 상단 내비게이션 바 */}
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#" onClick={() => { navigate('/'); }}>고니네 샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/'); }}>홈</Nav.Link>
              <Nav.Link onClick={() => { navigate('/cart'); }}>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
  );
}

export default Header;