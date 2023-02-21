import React from 'react';
import '../App.css';
import likeIconImage from "../img/like_icon.png";

function Card(props) {

  // - 받아오는 값 ---------------------------
  // const cookItem = {
  //   id: 1,
  //   title: "애호박구이 간장조림",
  //   cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
  //   userId: "샬라라",
  //   viewNo: 137479,
  //   likeNo: 3657,
  //   userComment: [
  //     {
  //     commentUserId: "삐리리",
  //     comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
  //     } 
  //   ],
  // };

  // const viewIndex = "view";
  // -----------------------------------------

  const {cookItem, viewIndex} = props;

  let view = true;
  let comment = false;
  
  if (viewIndex === 'view') {
    view = true;
    comment = false;
  } else if (viewIndex === 'comment') {
    view = false;
    comment = true;
  }  

  return (
    <>
    <div>

    <div className='card'>
      
      <img src={cookItem.cardImagePath} width={285} height={285}></img>

      { view && 
      <div className='bottomTextBox'>
        <div className='bottomTtextTitle'>{cookItem.title}</div>
      
        <div className='thumbnailBox'>
          <div className='thumbnailImage'> 
            {/* <img scr={thumbnailImagePath} width={25} height={25}></img> */}
            <i class="fa-solid fa-user"></i>
          </div>
          <p>{cookItem.userId}</p>
        </div>

        <div className='noBox'>

          <div className='viewNoBox'>
            {/* <img src={viewIconImage} width={25} style={{margin: 10}}></img> */}
            <i class="fa-regular fa-eye"></i>
            {cookItem.viewNo.toLocaleString('ko-KR')}
          </div>

          <div className='likeNoBox'>
            <img src={likeIconImage} width={25} style={{margin: 10}}></img>
            {cookItem.likeNo.toLocaleString('ko-KR')}
          </div>

        </div>

      </div> }
      
    </div>

    { comment &&
    <div className='commentBox'>

      <div className='thumbnailBox'>
        <div className='thumbnailImage'> 
          {/* <img scr={thumbnailImagePath} width={25} height={25}></img> */}
          <i class="fa-solid fa-user"></i>
        </div>
        <p>{cookItem.userComment[0].commentUserId}</p>
      </div>

      <div className='userComment'>
        <p>{cookItem.userComment[0].comment}</p>
      </div>

    </div>
    }

    </div>
    </>
  );
}

export default Card;