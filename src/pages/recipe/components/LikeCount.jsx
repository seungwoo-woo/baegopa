import React from 'react';
import { styled } from 'styled-components';
import "../css/recipeDetail.css";




function LikeCount(props) {
  const { infos, setrecipeInfos } = props;
  const [isClicked, setIsClicked] = React.useState(false);
  
  // console.log(infos);
  const imgUrl = "../images/btn-likecount-off.png";
  console.log(imgUrl);
  // console.log(copyLikeCount);
  return (
    <>
      <div 
        className='likecount'
        onClick={(e) => {
          e.stopPropagation();
          const copyLikeCount = [...infos];
          copyLikeCount[0].likeCounts++;
          setrecipeInfos(copyLikeCount);
          // console.log(infos);
          console.log(copyLikeCount);
          setIsClicked(true);
        }}
      >
        {isClicked 
          ? <img src={ require('../images/btn-likecount-on.png') } />
          : <img src={ require('../images/btn-likecount-off.png') } />
        }
        {/* <img 
          src={ require('../images/btn-likecount-off.png') } 
          // src={ imgUrl } 
        /> */}
        <span>
          {infos[0].likeCounts}
        </span>
      </div>
    </>
  );
}

export default LikeCount;