import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubHeader from './SubHeader';
import { GiBowlOfRice } from "react-icons/gi";
import Login from './Login';
import Search from './Search';
import styles from './Header.module.css'
import RecipeDetail from '../../recipe/RecipeDetail';



function Header(props) {
  return (
    <>
      {/* 헤더영역 */}
      <Navbar className={styles.stymain} collapseOnSelect expand="lg"  variant="dark">
        <Container className={styles.StyledContainer}>
          <Navbar.Brand className={styles.logo} href="#home">
          <h1 href="#home"><GiBowlOfRice /></h1>
          <h1 href="#home">배고파</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse className={styles.StyledNavbar} id="navbar-dark-example" style={{justifyContent:'inherit'}}>
            <div className={styles.Styleddiv}>
            {/* 검색창과 버튼영역 */}
            <Search />
            </div>
            <div className={styles.StyledLogin}>
            {/* 로그인영역 */}
            <Login />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* 서브메뉴영역 */}
      <Navbar className={styles.stynav} bg="light" variant="light">
        <Container>
          <Nav className={styles.stylednav}>
            <Nav.Link className={styles.ft} as={Link} to="/">Today's menu</Nav.Link>
            <Nav.Link className={styles.ft} as={Link} to="/best-menu">Best menu</Nav.Link>
            <Nav.Link className={styles.ft} as={Link} to="/view">ButtonKeepert</Nav.Link>
            <Nav.Link className={styles.ft} as={Link} to="/recipe">RecipeDetail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;