import React from 'react';
import "../css/recipeDetail.css";


function ButtonKeeper(props) {
  console.log('dd');
  return (
    <button type='button' className='btn-keeper'>
      <img src={ require('../images/btn_keeper_brown.png') } />
      <p class="arrow_box">레시피 담기</p>
    </button>
  );
}

export default ButtonKeeper;