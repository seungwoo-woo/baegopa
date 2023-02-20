import React from 'react';
import { Container, Navbar } from "react-bootstrap";
import styled from "styled-components"
import SubHeader from './SubHeader';
import { GiBowlOfRice } from "react-icons/gi";
import Login from './Login';
import Search from './Search';


function Header(props) {
  return (
    <>
      {/* 헤더영역 */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><GiBowlOfRice />배고파</Navbar.Brand>
          {/* 검색창과 버튼영역 */}
          <Search />
          {/* 로그인영역 */}
          <Login />
        </Container>
      </Navbar>
      {/* 서브메뉴영역 */}
      <SubHeader />
    </>
  );
}
export default Header;