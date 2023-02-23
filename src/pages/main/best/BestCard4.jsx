import React from 'react';
import BestCard from './BestCard';
import styles from './BestCard4.module.css'
function BestCard4(props) {
  return (
    <>
    <div className={styles.stybc}>
      <BestCard/>
    </div>
    <div className={styles.stybc}>
      <BestCard/>
    </div>
    <div className={styles.stybc}>
      <BestCard/>
    </div>
    <div className={styles.stybc}>
      <BestCard/>
    </div>
    </>
  );
}

export default BestCard4;