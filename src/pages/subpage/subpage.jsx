import React from 'react';
import styled from "styled-components";
import CardList from '../../components/CardList';


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
            <CardList/>    
            </div> 

            <div>
            <h1>오늘의 요리 결과물들</h1>
            </div>
        </div>
        
    );
}

export default Subpage;