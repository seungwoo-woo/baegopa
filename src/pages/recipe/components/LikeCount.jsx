import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import styles from "../css/recipeDetail.module.css";


function LikeCount(props) {
  const { recipeItem, setRecipeItem } = props;
  const [isClicked, setIsClicked] = useState(false);
  const handleToggle = useCallback((e) => {
    // const copyRecipeItem = {...recipeItem};
    // console.log(copyRecipeItem);
    e.stopPropagation();
    setIsClicked(isClicked => !isClicked);
    
    if(!isClicked){
      // copyRecipeItem.likeCount +=  1;
      // setRecipeItem(copyRecipeItem);
      setRecipeItem(recipeItem => ({
        ...recipeItem,
        likeCount: recipeItem.likeCount + 1
      }));
    } else {
      // copyRecipeItem.likeCount -=  1;
      // setRecipeItem(copyRecipeItem);
      setRecipeItem(recipeItem => ({
        ...recipeItem,
        likeCount: recipeItem.likeCount - 1
      }));
    }
  })
  return (
    <>
      <div
        className={styles.likecount}
        onClick={
          handleToggle
        }
      >
        {isClicked 
          ? <img src={ require('../images/btn-likecount-brown-on.png') } />
          : <img src={ require('../images/btn-likecount-brown-off.png') } />
        }
        <span>
          {recipeItem.likeCount}
        </span>
      </div>
    </>
  );
}

export default LikeCount;