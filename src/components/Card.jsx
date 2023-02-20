import React from 'react';
import '../App.css';

function Card(props) {
  const cardImagePath = "https://via.placeholder.com/300";
  const title ="애호박구이 간장조림";
  const thumbnailImagePath ="https://via.placeholder.com/30"
  const userId = "샬라라";
  const viewNo = 100000;
  const likeNo = 3657;
  return (
    <div className='card'>

      <img src={cardImagePath} width={285} height={285}></img>

      <div className='bottomTextBox'>
        <div className='bottomTtextTitle'>{title}</div>
      
        <div className='thumbnailBox'>
          <div className='thumbnailImage'> 
            <img scr={thumbnailImagePath}></img>
          </div>
          <p>{userId}</p>
        </div>

        <div className='noBox'>
          <div className='viewNoBox'>
            <img src="https://via.placeholder.com/25" style={{margin: 10}}></img>
            {viewNo}
          </div>

          <div className='likeNoBox'>
            <img src="https://via.placeholder.com/25" style={{margin: 10}}></img>
            {likeNo}
          </div>
        </div>
      
      </div>
      
      Card 1 
    </div>
  );
}

export default Card;