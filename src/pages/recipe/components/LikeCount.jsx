import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import styles from "../css/recipeDetail.module.css";


function LikeCount(props) {
  const { infos, setrecipeInfos } = props;
  const [isClicked, setIsClicked] = React.useState(false);
  const [ show, setShow ] = useState(false);
  // console.log(typeof infos);
  console.log(infos);

  // console.log(infos);
  const imgUrl = "../images/btn-likecount-off.png";
  // console.log(imgUrl);
  // console.log(copyLikeCount);

  const handleToggle = useCallback((id) => {
    const copyinfos = {...infos};
    const copyLikecount = copyinfos.LikeCount
    const plusLikecount = copyLikecount + 1;
    const minusLikecount = copyLikecount -1;
    
    setIsClicked(isClicked => !isClicked);
    
    if(isClicked){
      return setrecipeInfos(plusLikecount);
    } else {
      return setrecipeInfos(minusLikecount);
    }
  })


  return (
    <>
      <div
        className={styles.likecount}
        onClick={
          (e) => {
          e.stopPropagation();
          const copyinfos = {...infos};    // TODO: 2023-03-08 이렇게 쓸 경우 원본도 수정되지 않나요?
          console.log(copyinfos);
          copyinfos.likeCount++;
          setrecipeInfos(copyinfos);
          setIsClicked(true);
          // handleToggle
        }
      }
      >
        {isClicked 
          ? <img src={ require('../images/btn-likecount-brown-on.png') } />
          : <img src={ require('../images/btn-likecount-brown-off.png') } />
        }
        {/* <img 
          src={ require('../images/btn-likecount-off.png') } 
          // src={ imgUrl } 
        /> */}
        <span>
          {infos.likeCount}
        </span>
      </div>
    </>
  );
}

export default LikeCount;