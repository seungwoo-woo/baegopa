import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './SubHeader.module.css'

export default function SubHeader() {
  return (

    <Navbar className={styles.stynav} bg="light" variant="light">
      <Container>
        <Nav className={styles.stylednav}>
          <Nav.Link className={styles.ft} href="#home">오늘의 요리</Nav.Link>
          <Nav.Link className={styles.ft} href="#home">베스트 요리</Nav.Link>
          <Nav.Link className={styles.ft} href="features">분류</Nav.Link>
          <Nav.Link className={styles.ft} href="#pricing">추천</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

