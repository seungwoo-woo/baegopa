import React from 'react';
import { Container, Navbar } from "react-bootstrap";
import SubHeader from './SubHeader';
import { GiBowlOfRice } from "react-icons/gi";
import Login from './Login';
import Search from './Search';
import styled from "styled-components";
import styles from './Header.module.css'


const StyledLogo = styled(Navbar.Brand)`
display: flex;
justify-content: start;
margin-right: 200px;
`

const StyledContainer = styled(Container)`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
`
const StyledNavbar = styled(Navbar.Collapse)`
display: flex;
justify-content: space-around;
align-items: center;
`
const Styleddiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
align-items: center;
`
function Header(props) {
  return (
    <>
      {/* 헤더영역 */}
      <Navbar className={styles.stymain} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <StyledContainer>
          <StyledLogo style={{fontSize: '30px'}} href="#home"><GiBowlOfRice />배고파</StyledLogo>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <StyledNavbar id="navbar-dark-example">
            <Styleddiv>
            {/* 검색창과 버튼영역 */}
            <Search />
            </Styleddiv>
            <StyledLogin>
            {/* 로그인영역 */}
            <Login />
            </StyledLogin>
          </StyledNavbar>
        </StyledContainer>
      </Navbar>
      {/* 서브메뉴영역 */}
      <SubHeader />
    </>
  );
}
export default Header;