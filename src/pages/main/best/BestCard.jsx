import React, { Fragment } from 'react';
import Card from '../../../components/Card';


function BestCard(props) {
  const cookItemList = [ 
    {id: 1,
      title: "애호박구이 간장조림",
      cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
      userId: "샬라라",
      viewNo: 137479,
      likeNo: 3657,
      userComment: [
        {
        commentUserId: "삐리리",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
      ]},
  
  ];


  return (
    <Fragment>
        {cookItemList.map((cookItem) => {
          return <Card key={cookItem.id} cookItem={cookItem} />
        })
        }      
    </Fragment>
  );
}

export default BestCard;