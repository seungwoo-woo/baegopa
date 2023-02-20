import React from 'react';
import '../App.css';
import likeIconImage from "../img/like_icon.png";
import viewIconImage from "../img/view_icon.png";

function Card(props) {
  const cardImagePath = "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs";
  const title ="애호박구이 간장조림";
  const thumbnailImagePath ="https://via.placeholder.com/30"
  const userId = "샬라라";
  const viewNo = 137479;
  const likeNo = 3657;

  return (
    <div className='card'>

      <img src={cardImagePath} width={285} height={285}></img>

      <div className='bottomTextBox'>
        <div className='bottomTtextTitle'>{title}</div>
      
        <div className='thumbnailBox'>
          <div className='thumbnailImage'> 
            <img scr={thumbnailImagePath} width={25} height={25}></img>
          </div>
          <p>{userId}</p>
        </div>

        <div className='noBox'>
          <div className='viewNoBox'>
            <img src={viewIconImage} width={25} style={{margin: 10}}></img>
            {viewNo.toLocaleString('ko-KR')}
          </div>

          <div className='likeNoBox'>
            <img src={likeIconImage} width={25} style={{margin: 10}}></img>
            {likeNo.toLocaleString('ko-KR')}
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default Card;