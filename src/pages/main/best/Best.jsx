import React, { Fragment} from 'react';
import { FaMedal } from "react-icons/fa";
import BestSlider from './BestSlider';
function Best(props) {

  return (
    <>
    <Fragment>
    <h1><FaMedal/>베스트 요리</h1>
  </Fragment>
  <BestSlider/>

    </>
  );
}
export default Best;