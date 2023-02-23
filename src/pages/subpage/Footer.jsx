import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  width: 1200px;
  height: 200px;
  margin: 0 auto;
  background-color: beige;
  text-align: center;
  line-height: 200px;
  color: #000;
  font-size: 40px;
  font-weight: 600;
`

function Footer(props) {
  return (
    <Wrapper>
    <div>
      FOOTER
    </div>
    </Wrapper>
  );
}

export default Footer;