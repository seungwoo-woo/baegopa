import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CardList from '../../../components/CardList';
import BestCard from '../best/BestCard';
import styles from './MainButton.module.css'

// const handleGetMoreProducts = async () => {
//   const reauest = await getProducts();
//   if (!reauest) return;

//   // 스토어에 dispatch로 요청 보내기
//   dispatch(getMoreProducts(reauest));
// };
const viewIndex = 'comment';
const keyword = [8]
  
function MainButton(props) {
  const [showComponents, setShowComponents] = useState([]);

  const handleClick = () => {
    setShowComponents([...showComponents, <CardList keyword={keyword} />]);
  };

  return (
    <div className={styles.inner}>
      <div className={styles.wr}>
        {showComponents}
      </div>
      <Button className={styles.btn} variant="outline-success" onClick={handleClick}>
        더보기
      </Button>{' '}
    </div>
  );
}

export default MainButton;