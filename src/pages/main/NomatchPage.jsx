import React from 'react';
import styles from './NomatchPage.module.css'
function NomatchPage(props) {
  return (
    <div className={styles.flexdiv}>
      <div className={styles.errordiv}>
        <h1>😢잘못된 페이지입니다.</h1>
      </div>
    </div>
  );
}

export default NomatchPage;