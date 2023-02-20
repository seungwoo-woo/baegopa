import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function SubHeader() {
  return (
    <header>
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
  </header>
  );
}

