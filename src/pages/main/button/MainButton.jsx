import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './MainButton.module.css'


function MainButton(props) {
  return (
    <div className={styles.inner}>
      <Button className={styles.btn} variant="outline-success">더보기</Button>{' '}
    </div>
  );
}

export default MainButton;