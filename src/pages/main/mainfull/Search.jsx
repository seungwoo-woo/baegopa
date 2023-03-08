import React from 'react';
import { Button, Form, Nav } from 'react-bootstrap';
import styles from './Search.module.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Search(props) {
  return (
    <Form className={styles.df}>
      <input className={styles.cr}
        type="text"
        placeholder="레시피를 검색해주세요."
        aria-label="Search"
      />
      <Nav.Link className={styles.btn} style={{
      }}  as={Link}  to="/search">검색</Nav.Link>
    </Form>
  );
}

export default Search;