import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from "styled-components";
const StyledMainNav = styled(Navbar)`
  width: 1200px;
`
const StyledNav = styled(Nav)`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function SubHeader() {
  return (

    <StyledMainNav bg="light" variant="light">
      <Container>
        <StyledNav className="me-auto">
          <Nav.Link href="#home">오늘의 요리</Nav.Link>
          <Nav.Link href="#home">베스트 요리</Nav.Link>
          <Nav.Link href="#features">분류</Nav.Link>
          <Nav.Link href="#pricing">나머지</Nav.Link>
        </StyledNav>
      </Container>
    </StyledMainNav>
  );
}

