import React, { Fragment} from 'react';
import { FaMedal } from "react-icons/fa";
import styles from './Today.module.css'
function Best(props) {

  return (
    <>
    <Fragment>
    <h1 className={styles.hd} ><FaMedal/>베스트 요리</h1>
  </Fragment>

    </>
  );
}
export default Best;