import React, { Fragment} from 'react';
import { FaMedal } from "react-icons/fa";
import BestSlider2 from './BestSlider2';
function Best(props) {

  return (
    <>
    <Fragment>
    <h1><FaMedal/>베스트 요리</h1>
  </Fragment>
  <BestSlider2/>

    </>
  );
}
export default Best;