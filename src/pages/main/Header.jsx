import React from 'react';
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components"
import SubHeader from './SubHeader';



function Header(props) {
  return (
    <>
      {/* 헤더영역 */}
      <header id='full'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">배고파</Navbar.Brand>
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
              <Button variant="outline-success">Search</Button>
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
     <SubHeader/>
    </>
  );
}

export default Header;