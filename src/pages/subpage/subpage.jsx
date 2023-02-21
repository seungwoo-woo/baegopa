import React from 'react';
import styled from "styled-components";


const Nav = styled.nav`
    background: #000;
`;
// w 1200
const Ennen = styled.div`
`;

const box = styled.div`
    width: 1200px;
    display: flex;
    
`;


function Subpage(props) {
    return (
        <div>
           <nav>NAV영역</nav>
           <div>
            <h1>레시피종류</h1>
            <img src='https://via.placeholder.com/285x285' alt='#'/>
            <img src='https://via.placeholder.com/285x285' alt='#'/>
            <img src='https://via.placeholder.com/285x285' alt='#'/>
        
            </div> 
            <div>
                <h1>오늘의 요리 결과물들</h1>
                    <img src='https://via.placeholder.com/285x285' alt='#'/>
                    <img src='https://via.placeholder.com/285x285' alt='#'/>
                    <img src='https://via.placeholder.com/285x285' alt='#'/>
                    <img src='https://via.placeholder.com/285x285' alt='#'/>
            </div>
        </div>
    );
}

export default Subpage;