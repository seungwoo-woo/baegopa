import React from 'react';
import styles from "../css/recipeDetail.module.css";


function ButtonKeeper(props) {
  console.log('dd');
  return (
    <button type='button' className={styles['btn-keeper']}>
      <img src={ require('../images/btn_keeper_brown.png') } />
      <p class={styles['arrow_box']}>레시피 담기</p>
    </button>
  );
}

export default ButtonKeeper;