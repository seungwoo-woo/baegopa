import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectRecipeList, removeItemFromCart } from "../features/cart/cartSlice";

import Card from '../../components/Card';
import CardList from '../../components/CardList';

import styles from "./myPage.module.css";

function Mypage(props) {
  const dispatch = useDispatch();
  // const cartList = useSelector(selectRecipeList);
  // console.log(cartList);

  // TODO : 원본!!! API에 맞는 키값
  //   const recipeLists = [
  //     { 
  //     docId: '123', 
  //     hashtags: [],
  //     difficulty: '중',
  //     imageFilesPath: ['http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png', 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_2.png'],
  //     ingredientItems: ['재료 바지락', '주꾸미', '김치)', '무', '마늘', '대파', '양파', '두부', '참기름', '배즙', '팽이버섯', '육수 다시마', '멸치', '물)'],
  //     ingredientUnits: ['100', '100', '150', '50', '10', '10', '40', '50', '5', '50', '10', '5', '10', '300'],
  //     ingredientValues: ['g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
  //     likeCount: '199',
  //     meals: '2',
  //     process: ["1. 냄비에 육수 재료를 넣고 끓이다가 물이 끓어오르면 다시마를 건지고 조금 더 끓여 육수를 우려낸다.",
  //     "2. 바지락은 해감하고, 주꾸미는 내장과 입, 눈을 제거하고 4cm 크기로 잘라 준비한다.",
  //     "3. 김치는 국물을 꽉 짜서 한입 크기로 썰고, 무는 편 썰고, 마늘은 다지고, 대파는 어슷 썰고, 양파는 굵게 채 썰고, 두부는 납작하게 썬다.",
  //     "4. 냄비에 참기름을 두르고, 양파와 김치가 투명해질 때까지 볶다가 육수를 붓고 바지락을 넣어 끓으면 주꾸미를 넣어 더 끓인다.",
  //     "5. 김칫국물과 배즙을 2:1로 섞은 뒤 찌개에 넣어 간을 맞춘다.",
  //     "6. 두부, 팽이버섯을 넣고 한소끔 끓여 마무리한다.",],
  //     subtitle: '간단하게 만들어 보는 김치 톡톡톡 김치찌개♥ 다 먹고 한 방울까지 싹싹 밥이랑 비벼먹는게 최고죠~ 색깔도 너무 이쁘고 한 그릇만 있으면 반찬도 필요없는 김치찌개',
  //     time: '30',
  //     title: '김치찌개',
  //     userId: '배고파',
  //     viewCount: '201',
  //   },
  //     { 
  //     docId: '124', 
  //     hashtags: [],
  //     difficulty: '중',
  //     imageFilesPath: ['http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png', 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_2.png'],
  //     ingredientItems: ['재료 바지락', '주꾸미', '김치)', '무', '마늘', '대파', '양파', '두부', '참기름', '배즙', '팽이버섯', '육수 다시마', '멸치', '물)'],
  //     ingredientUnits: ['100', '100', '150', '50', '10', '10', '40', '50', '5', '50', '10', '5', '10', '300'],
  //     ingredientValues: ['g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
  //     likeCount: '199',
  //     meals: '2',
  //     process: ["1. 냄비에 육수 재료를 넣고 끓이다가 물이 끓어오르면 다시마를 건지고 조금 더 끓여 육수를 우려낸다.",
  //     "2. 바지락은 해감하고, 주꾸미는 내장과 입, 눈을 제거하고 4cm 크기로 잘라 준비한다.",
  //     "3. 김치는 국물을 꽉 짜서 한입 크기로 썰고, 무는 편 썰고, 마늘은 다지고, 대파는 어슷 썰고, 양파는 굵게 채 썰고, 두부는 납작하게 썬다.",
  //     "4. 냄비에 참기름을 두르고, 양파와 김치가 투명해질 때까지 볶다가 육수를 붓고 바지락을 넣어 끓으면 주꾸미를 넣어 더 끓인다.",
  //     "5. 김칫국물과 배즙을 2:1로 섞은 뒤 찌개에 넣어 간을 맞춘다.",
  //     "6. 두부, 팽이버섯을 넣고 한소끔 끓여 마무리한다.",],
  //     subtitle: '간단하게 만들어 보는 김치 톡톡톡 김치찌개♥ 다 먹고 한 방울까지 싹싹 밥이랑 비벼먹는게 최고죠~ 색깔도 너무 이쁘고 한 그릇만 있으면 반찬도 필요없는 김치찌개',
  //     time: '30',
  //     title: '김치찌개',
  //     userId: '배고파',
  //     viewCount: '201',
  //   },
  //     { 
  //     docId: '125', 
  //     hashtags: [],
  //     difficulty: '중',
  //     imageFilesPath: ['http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png', 'http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_2.png'],
  //     ingredientItems: ['재료 바지락', '주꾸미', '김치)', '무', '마늘', '대파', '양파', '두부', '참기름', '배즙', '팽이버섯', '육수 다시마', '멸치', '물)'],
  //     ingredientUnits: ['100', '100', '150', '50', '10', '10', '40', '50', '5', '50', '10', '5', '10', '300'],
  //     ingredientValues: ['g','g','g','g','g','g','g','g','g','g','g','g','g','g',],
  //     likeCount: '199',
  //     meals: '2',
  //     process: ["1. 냄비에 육수 재료를 넣고 끓이다가 물이 끓어오르면 다시마를 건지고 조금 더 끓여 육수를 우려낸다.",
  //     "2. 바지락은 해감하고, 주꾸미는 내장과 입, 눈을 제거하고 4cm 크기로 잘라 준비한다.",
  //     "3. 김치는 국물을 꽉 짜서 한입 크기로 썰고, 무는 편 썰고, 마늘은 다지고, 대파는 어슷 썰고, 양파는 굵게 채 썰고, 두부는 납작하게 썬다.",
  //     "4. 냄비에 참기름을 두르고, 양파와 김치가 투명해질 때까지 볶다가 육수를 붓고 바지락을 넣어 끓으면 주꾸미를 넣어 더 끓인다.",
  //     "5. 김칫국물과 배즙을 2:1로 섞은 뒤 찌개에 넣어 간을 맞춘다.",
  //     "6. 두부, 팽이버섯을 넣고 한소끔 끓여 마무리한다.",],
  //     subtitle: '간단하게 만들어 보는 김치 톡톡톡 김치찌개♥ 다 먹고 한 방울까지 싹싹 밥이랑 비벼먹는게 최고죠~ 색깔도 너무 이쁘고 한 그릇만 있으면 반찬도 필요없는 김치찌개',
  //     time: '30',
  //     title: '김치찌개',
  //     userId: '배고파',
  //     viewCount: '201',
  //   },
    
  // ]
  const [cookItemList, setCookItemList] = useState([
    {
      id: 1,
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
      ]
    },
    {
      id: 2,
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
      ]
    },
    {
      id: 3,
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
      ]
    },
    {
      id: 4,
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
      ]
    },
    {
      id: 5,
      title: "",
      cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
      userId: "",
      viewNo: 137479,
      likeNo: 3657,
      userComment: [
        {
        commentUserId: "",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
      ]
    },
    {
      id: 6,
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
      ]
    },
    {
      id: 7,
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
      ]
    },
    {
      id: 8,
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
      ]
    },
  ]);
  
  const viewIndex = 'view';



  return (
    <>
      <section className={styles['recipekeeps-wrap']}>
        <h3>RECIPE KEEP LIST</h3>
        <p>책갈피한 레시피를 확인해 보세요.</p>
        <div className={styles['recipekeeps']}>
          {cookItemList.map((cookItem) => {
            return (<Card cookItem={cookItem} viewIndex={viewIndex} />)
            })
          }
        </div>
        {/* <button
          type='button'
          onClick={() => {dispatch(addItemRecipe(recipe.id))}}
        >
          
        </button> */}
      </section>
    </>
  );
}

export default Mypage;