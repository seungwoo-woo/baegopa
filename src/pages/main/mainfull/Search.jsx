import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './Search.module.css'
function Search(props) {
  return (
    <Form className={styles.df}>
      <input className={styles.cr}
        type="text"
        placeholder="레시피를 검색해주세요."
        aria-label="Search"
      />
      <Button className={styles.btn} style={{
      }} variant="outline-success">검색</Button>
    </Form>
  );
}

export default Search;