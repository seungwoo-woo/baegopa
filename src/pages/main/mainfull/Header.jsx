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
          <Navbar.Brand className={styles.logo} href="/">
          <h1 href="/"><GiBowlOfRice /></h1>
          <h1 href="/">배고파</h1>
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
      <SubHeader/>
    </>
  );
}
export default Header;