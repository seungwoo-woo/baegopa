import React from 'react';
import styled from 'styled-components';
import styles from "../css/recipeDetail.module.css";


function LikeCount(props) {
  const { infos, setrecipeInfos } = props;
  const [isClicked, setIsClicked] = React.useState(false);
  console.log(typeof infos);
  console.log(infos);

  // console.log(infos);
  const imgUrl = "../images/btn-likecount-off.png";
  // console.log(imgUrl);
  // console.log(copyLikeCount);
  return (
    <>
      <div 
        className={styles.likecount}
        onClick={(e) => {
          e.stopPropagation();
          // const copyLikeCount = [...infos];
          // copyLikeCount[0].likeCounts++;
          const copyLikeCount = infos;    // TODO: 2023-03-08 이렇게 쓸 경우 원본도 수정되지 않나요?
          console.log(typeof copyLikeCount);
          console.log(copyLikeCount);
          copyLikeCount.likeCount++;
          setrecipeInfos(copyLikeCount);
          console.log(infos);
          console.log(copyLikeCount);
          setIsClicked(true);
        }}
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