import React, { Fragment } from 'react';
import { AiOutlineLike } from "react-icons/ai";
function Today(props) {
  return (
    <>
      <Fragment>
        <h1><AiOutlineLike />오늘의 요리</h1>
      </Fragment>
      <div>
      <img style={{marginRight:'30px'}} src='https://via.placeholder.com/220x530' />
      <img src='https://via.placeholder.com/925x530' />
      </div>
    
    </>

  );
}

export default Today;