import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Search(props) {
  return (
    <Form className="d-flex"
    style={{
      justifyContent:'center'
    }} >
    <Form.Control
    style={{
      width: '300px',
    
      
    }}
      type="search"
      placeholder="레시피를 검색해주세요."
      className="me-2"
      aria-label="Search"
    />
    <Button style={{
      width: '80px'
    }} variant="outline-success">검색</Button>
  </Form>
  );
}

export default Search;