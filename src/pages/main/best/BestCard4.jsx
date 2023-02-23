import React, { Fragment } from 'react';
import BestCard from './BestCard';
import styles from './BestCard4.module.css'
function BestCard4(props) {
  return (
    <Fragment className={styles.styma}>
    <div className={styles.stybc}>
      <BestCard/>
    </div>
    <div className={styles.stybc}>
      <BestCard/>
    </div>
    <div className={styles.stybc}>
      <BestCard/>
    </div>
    <div className={styles.stybcc}>
      <BestCard/>
    </div>
    </Fragment>
  );
}

export default BestCard4;