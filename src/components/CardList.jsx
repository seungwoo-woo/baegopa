import styles from './CardList.module.css';

import React from 'react';
import Card from './Card';



function CardList(props) {

  // console.log(props);
  // const {groupTitme, cookItemList, viewIndex} = props;
  const groupTitme = '레시피 검색결과';
  const cookItemList = [ 
    {id: 1,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
    {id: 2,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
    {id: 3,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
    {id: 4,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
    {id: 5,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
    {id: 6,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
    {id: 7,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
    {id: 8,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
      {
      commentUserId: "닉네임",
      comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
      } 
    ]},
  ];

  const viewIndex = 'comment';

  return (

    <div className={styles.group}>
      <div className={styles.cardList}>
        {cookItemList.map((cookItem) => {
          return <Card key={cookItem.id} cookItem={cookItem} viewIndex={viewIndex} />
        })
        }
      </div>
    </div>
  );
}

export default CardList;  