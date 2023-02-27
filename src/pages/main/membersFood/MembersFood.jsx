import React, { Fragment } from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import Card from '../../../components/Card';
import CardList from '../../../components/CardList';
import styles from './MembersFood.module.css'

const groupTitme = '배고플 때 생각나는...';
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
  {id: 2,
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
  {id: 3,
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
  {id: 4,
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
  {id: 5,
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
  {id: 6,
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
  {id: 7,
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
  {id: 8,
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

const viewIndex = 'comment';

function MembersFood(props) {

  // const {viewIndex, groupTitme, cookItemList} = props;
  
  return (
    <Fragment>
    <div>
    <h1 className={styles.hd}> <GiCampCookingPot/>회원들 요리</h1>
    </div>
    <div className={styles.header}>
      <CardList viewIndex={viewIndex} groupTitme={groupTitme} cookItemList={cookItemList}/>
    </div>
    </Fragment>
  );
}

export default MembersFood;