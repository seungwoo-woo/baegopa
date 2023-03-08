import React from 'react';
// import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToRecipe, selectRecipeList } from "../../mypage/recipeSlice";

import styles from "../css/recipeDetail.module.css";


function ButtonKeeper(props) {
  const dispatch = useDispatch();
  const recipeList = useSelector(selectRecipeList);
  // console.log(recipeList);
  // console.log('dd');
  // const product = useSelector(selectSelectedProduct);
  // console.log(product);

  return (
    <button 
      type='button' 
      className={styles['btn-keeper']}
      onClick={() => {
        dispatch(addItemToRecipe({ 
          // id: product.id, 
          // title: product.title,
          // price:product.price, 
          // count: orderCount
        }));
      }}
    >
      <img src={ require('../images/btn_keeper_brown.png') } />
      <p class={styles['arrow_box']}>레시피 담기</p>
    </button>
  );
}

export default ButtonKeeper;