import React from 'react';
import styles from './View.module.css'
export default function View(props) {
  return (
    <div>
       <p className={styles.views}>조회수:{props.views}</p>
    </div>
  );
}

