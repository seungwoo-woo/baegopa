import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BestCard4 from '../best/BestCard4';
import styles from './MainButton.module.css'

// const handleGetMoreProducts = async () => {
//   const reauest = await getProducts();
//   if (!reauest) return;

//   // 스토어에 dispatch로 요청 보내기
//   dispatch(getMoreProducts(reauest));
// };

  
  
  function MainButton(props) {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className={styles.inner}>
      <div className={styles.wr}>
      {showComponent && <BestCard4 />}
      </div>
      <Button className={styles.btn} variant="outline-success" onClick={handleClick}>더보기</Button>{' '}
    </div>
  );
  }

export default MainButton;