import React, { useState } from 'react';
import styles from './Counters.module.css'

export default function Counters() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button className={styles.count} onClick={() => {
        setCounter(counter + 1);
      }}></button>
      <span>{counter}</span>
    </div>
  );
}

