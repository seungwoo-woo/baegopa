import React from 'react';
import { Button, Container, Form, Nav, Navbar, Navbar } from "react-bootstrap";
import styled from "styled-components"

const HeaderNavbar = styled(Navbar)`
  
`

function Header(props) {
  return (
    <>
      {/* 헤더영역 */}
      <header id='full'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand  href="#home">배고파</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button  variant="outline-success">Search</Button>
            </Form>
            <Nav>
              <Nav.Link href="#deets">로그인</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                회원가입
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <subheader>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#home">Navbar</Nav.Link>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </subheader>
    </>
  );
}

export default Header;