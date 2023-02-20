import React from 'react';
import styled from "styled-components";


const nav = styled.nav`
    background: #000;
`


function subpage(props) {
    return (
        <div>
           <nav>NAV영역</nav>
           <div>
            <h1>레시피종류</h1>
            <img>분류1</img>
            <img>분류2</img>
            <img>분류3</img>
            </div> 
            <div>
                <h1>오늘의 요리 결과물들</h1>
                <Table>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
      </Table>
            </div>
        </div>
    );
}

export default subpage;