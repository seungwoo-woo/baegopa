import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  width: 1200px;
  height: 150px;
  margin: 0 auto;
  background-color: #F4F0EF;
  text-align: center;
  line-height: 150px;
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