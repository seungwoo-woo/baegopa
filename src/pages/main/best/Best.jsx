import React, { Fragment} from 'react';
import styles from './Today.module.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
function Best(props) {

  return (
    <>
    <Fragment>
    <Nav.Link className={styles.hd} as={Link}  to="/best">Best menu</Nav.Link>
  </Fragment>

    </>
  );
}
export default Best;