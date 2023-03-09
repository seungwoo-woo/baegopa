import React, { useCallback, useEffect, useRef, useState, useParams } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
// import { getAllRecipes, selectedRecipe } from './features/recipelistdb/recipeSlice';
// import { getRecipes, getRecipeById } from "./api/recipeListAPI";
// import { useDispatch, useSelector } from 'react-redux';

import styles from "./css/recipeDetail.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// === Firebase ======================================================
import { firebaseConfig } from '../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, orderBy, limit } from "firebase/firestore";
import { number } from 'prop-types';
// -------------------------------------------------------------------



import CardList from '../../components/CardList';
import Card from './../../components/Card';
import LikeCount from './components/LikeCount';
import ViewCount from './components/ViewCount';
import ButtonKeeper from './components/ButtonKeeper';

import ReviewRegiter from './components/ReviewRegiter';
import { async } from 'q';
import { forEach } from 'lodash';


// TODO : 데이터 연결 했다는 가정(나중에 삭제)-------------------------------------------------- 
const recipeee  = 
  {
    difficulty : "상",
    docId : "38B431UkKcmFl18XnntZ",
    hashtags: ["해시태그1", "해시태그2", "해시태그3"],
    imageFilesPath : ["http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00639_1.png", "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00639_1.png", "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00639_2.png", "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00639_3.png", "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00639_4.png", "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00639_5.png"],
    ingredientItems :  ["호박잎", " 닭고기", " 찹쌀", " 대추", "\n미나리", " 인삼", " 소금", " 후춧가루"], 
    ingredientUnits : ["개", "개", "개", "개", "개", "개", "개", "개"],
    ingredientValues : ["1", "1", "1", "1", "1", "1", "1", "1"],
    likeCount: 0,
    meals : 2,
    process : ["1. 찹쌀은 깨끗이 씻어 30분 정도 불린다", "2. 불린 찹쌀은 냄비에 넣고 질게 밥을\n한다.", "3. 닭가슴살은 넓게 펴서 소금,\n후춧가루를 뿌린다.", "4. 호박잎과 미나리는 끓는 물에 살짝\n데치고, 대추는 돌려 깎아 씨를\n제거하고 인삼은 뇌두를 제거한 뒤\n채를 썰어둔다.", "5. 데친 호박잎에 닭 가슴살을 올린다.", "6. 닭 가슴살위에 찹쌀밥과 준비한 야채와\n대추를 올려 돌돌 말아 질게 된\n찹쌀밥에 넣고 약 20분 정도 더 쪄낸다."],
    subtitle : "임시 서브 타이틀 - 호박잎 삼계탕",
    time : 30,
    title : "호박잎 삼계탕",
    userId : "어우동",
    viewCount : 0
  };


// --------------------------------------------임의 데이터------------------------------------------
const recipes = [
  {
    // 요리명, 이미지, 재료, 설명, 방법, 난이도, 양, 조리시간, 해시태그
    id: 1, 
    title: "김치찌개",
    image01: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png",
    image02: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_2.png",
    ingredients: "재료 바지락(100g), 주꾸미(100g), 김치(150g), 무(50g), 마늘(10g) 대파(10g), 양파(40g), 두부(50g), 참기름(5g), 배즙(50g), 팽이버섯(10g) 육수 다시마(5g), 멸치(10g), 물(300g)",
    subtitle: "간단하게 만들어 보는 김치 톡톡톡 김치찌개♥ 다 먹고 한 방울까지 싹싹 밥이랑 비벼먹는게 최고죠~ 색깔도 너무 이쁘고 한 그릇만 있으면 반찬도 필요없는 김치찌개",
    manual01: "1. 냄비에 육수 재료를 넣고 끓이다가 물이 끓어오르면 다시마를 건지고 조금 더 끓여 육수를 우려낸다.",
    manual02: "2. 바지락은 해감하고, 주꾸미는 내장과 입, 눈을 제거하고 4cm 크기로 잘라 준비한다.",
    manual03: "3. 김치는 국물을 꽉 짜서 한입 크기로 썰고, 무는 편 썰고, 마늘은 다지고, 대파는 어슷 썰고, 양파는 굵게 채 썰고, 두부는 납작하게 썬다.",
    manual04: "4. 냄비에 참기름을 두르고, 양파와 김치가 투명해질 때까지 볶다가 육수를 붓고 바지락을 넣어 끓으면 주꾸미를 넣어 더 끓인다.",
    manual05: "5. 김칫국물과 배즙을 2:1로 섞은 뒤 찌개에 넣어 간을 맞춘다.",
    manual06: "6. 두부, 팽이버섯을 넣고 한소끔 끓여 마무리한다.",
  },
  {
    id: 2,
    title: "나가사키부대찌개",
    image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00277_1.png",
    ingredients: "재료 통조림 햄(30g), 우유(100g), 실곤약(50g), 양파(30g), 느타리버섯(25g) 표고버섯(10g), 팽이버섯(30g), 청양고추(5g), 붉은 고추(5g), 감자(30g) 무(30g), 두부(40g), 애호박(30g), 깻잎(3g), 쑥갓(10g) 완자 다진 돼지고기(20g), 다진 파(5g), 다진 마늘(5g), 후춧가루(1g) 소금(1g), 밀가루(10g), 달걀노른자(20g) 육수 사골육수(300g), 다시마(5g) 양념 들깻가루(15g)",
    subtitle: "간단하게 만들어 보는 김치 톡톡톡 김치찌개♥ 다 먹고 한 방울까지 싹싹 밥이랑 비벼먹는게 최고죠~ 색깔도 너무 이쁘고 한 그릇만 있으면 반찬도 필요없는 김치찌개",
    manual01: "1. 통조림 햄은 한 번 데친 뒤 우유에 담가두고, 실곤약은 식초를 넣은 끓는 물에 살짝 데친다.",
    manual02: "2. 양파는 굵게 채 썰고, 느타리버섯은 찢고, 표고버섯은 모양대로 썰고, 팽이버섯은 끝부분을 잘라내고, 청양고추와 붉은 고추는 어슷 썬다.",
    manual03: "3. 감자, 무, 두부는 0.5㎝ 두께로 썰고, 애호박은 반달썰기 하고 깻잎은 채 썰어 찬물에 담가 매운맛을 제거한다.",
    manual04: "4. 사골육수에 다시마를 넣어 끓인 후 한 김 식힌다.",
    manual05: "5. 다진 돼지고기에 다진 파, 다진 마늘, 후춧가루, 소금을 섞어 완자를 만들고 밀가루와 달걀물을 묻혀 식용유(5g)를 두른 팬에 부친다.",
    manual06: "6. 냄비에 재료를 보기 좋게 담고 사골육수를 부은 뒤 끓이다가 쑥갓과 들깻가루를 넣어 마무리한다.",
  },
  {
    id: 3,
    title: "삼계부대찌개",
    image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00278_1.png",
    ingredients: "재료 바지락(100g), 주꾸미(100g), 김치(150g), 무(50g), 마늘(10g) 대파(10g), 양파(40g), 두부(50g), 참기름(5g), 배즙(50g), 팽이버섯(10g) 육수 다시마(5g), 멸치(10g), 물(300g)",
    subtitle: "간단하게 만들어 보는 김치 톡톡톡 김치찌개♥ 다 먹고 한 방울까지 싹싹 밥이랑 비벼먹는게 최고죠~ 색깔도 너무 이쁘고 한 그릇만 있으면 반찬도 필요없는 김치찌개",
    manual01: "1. 육수 재료를 넣고 20분간 끓여 육수를 낸다.",
    manual02: "2. 닭가슴살과 당근을 다져 모양을 잡은 뒤 김 오른 찜기에 넣고 찐다.",
    manual03: "3. 고추, 대파는 어슷 썰고, 쑥갓, 표고버섯, 애호박, 김치는 먹기 좋은 크기로 썰고, 팽이버섯은 밑동을 잘라 손질한다.",
    manual04: "4. 당면과 숙주는 뜨거운 물에 데쳐 준비한다.",
    manual05: "5. 양념장 재료를 섞은 뒤 육수(13g)를 넣고 양념장을 만든다.",
    manual06: "6. 준비한 재료를 담고 육수를 부은 뒤 양념장을 넣고 끓여 마무리한다.",
  },
];

const recipeInfo = [
  {
    id: 1,
    level: "상",
    time: 100,
    meals: 2,
    hashtags: ["김치찌개", "찌개", "해장", "시원한", "매운", "김치", "해장국", "밥도둑", "비오는날", "두부", "알싸한", "얼큰한"],
    likeCounts: 11111,   // TODO: 추후 삭제데이터
    viewCount: 1212,     // TODO: 추후 삭제데이터
  },
  {
    id: 2,
    level: "하",
    time: 20,
    meals: 2,
    hashtags: ["나가사키부대찌개", "찌개", "해장", "시원한", "매운", "일본", "해장국", "밥도둑", "비오는날", "두부", "알싸한", "얼큰한"],
    likeCounts: 22222,
    viewCount: 1212,
  },
  {
    id: 3,
    level: "중",
    time: 50,
    meals: 2,
    hashtags: ["삼계부대찌개", "찌개", "해장", "시원한", "건강한", "닭", "보양식", "밥도둑", "아픈날", "두부", "알싸한", "얼큰한"],
    likeCounts: 33333,
    viewCount: 1212,
  },
];

const userReviews = [
  {
    userId: "지민마누라",
    userImg: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png",
    userReview: "오 맛있었어요. 고추장넣은 찌개 별로 안좋아하는데 맛도 안강하고 딱 좋아요! 저도 설탕조금, 소금조금 추가했어요~~버섯도 잘 어울리네요!",
  },
  {
    userId: "정국짝",
    userImg: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png",
    userReview: "처음으로 요리를 시작하면서 따라한 요리입니다. 처음임에도 불구하고 맛있게 잘 먹었습니다. 감사합니다.",
  },
  {
    userId: "진내꼬얌",
    userImg: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png",
    userReview: "덕분에 오늘 비오는날 하게되었어요^^ 저녁밥찌개에 매운걸 싫어하는 조카가 있어서 저는 올리고당 한스푼에 넣구 간장 한스푼에 넣구 조금더 끓이니 달달하면서도 국물도 좀더 진해지구 얼큰 하더라구요 고추장과 고추가루가 태양초에 청양이다보니.. 다음에는 여기에다가 맑게한번 새우젓넣구 시원하게 해보려구요ㅎ 비오는날 얼큰하게 잘 먹었습니다.",
  }
];

function RecipeDetail(props) {
  
  
  const { docId } = useParams();
  console.log(docId);

  // const post = recipeItem.find((item) => {
  //   return item.id == poId;
  // });
  
  const [ recipeItem, setRecipeItem ] = useState(
    {
      difficulty : "",
      docId : "",
      hashtags: [],
      imageFilesPath : [],
      ingredientItems :  [], 
      ingredientUnits : [],
      ingredientValues : [],
      likeCount: 0,
      meals : 0,
      process : [],
      subtitle : "",
      time : 0,
      title : "",
      userId : "",
      viewCount : 0
    },
  );

  const recipeItemId = "3AdVlL6NdukB0nBsLwQH";
  
  useEffect (() => {
    const readRecipeDB = async () => {
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      // console.log(db);
      const querySelectSnapshot = await getDoc(doc(db, "RecipeDB", recipeItemId)); 
      // console.log(querySelectSnapshot.exists());
      // console.log(querySelectSnapshot.data());
      const recipeItemCall = querySelectSnapshot.data();
      // console.log(recipeSelectItem.title);
      setRecipeItem(recipeItemCall);
    }
    readRecipeDB();
  }, []);

  console.log(recipeItem);
  console.log(recipeItem.hashtags);

  const inredientSum = [];
  recipeItem.ingredientItems.forEach((item, index) => {
    inredientSum.push(`${item} ${recipeItem.ingredientValues[index]}${recipeItem.ingredientUnits[index]}`)
  });
  console.log(inredientSum);

// -----팀장님 DB-----------------------------------------------------------


  // const dispatch = useDispatch();
  // const recipeId = "38B431UkKcmFl18XnntZ";
  // console.log(recipeId);
  // const recipeData = () => {
  // }
  // useEffect(() => {
  //   const recipeDB = async () => {
  //     const data = await getRecipes();
  //     console.log(data);
  //     return data;
  //   }
  //   recipeDB();
  //   // const recipeSelect = async () => {
  //   //   const data = await getRecipeById();
  //   //   console.log(data);
  //   //   return data;
  //   // }
  //   // recipeSelect();



  //   // const foundRecipe = data.find((recipe) => {
  //     // console.log(recipe);
  //     // return recipe.id === docId;
  //   // });
  //   // dispatch(getRecipeById(foundRecipe));

  //   // // F12 > Application에서 볼 수 있음
  //   // // 상세페이지에 들어오면 해당 상품의 id를 localStorage에 추가 (추가할 때는 getItem이고 데이터가 문자이기 때문에 JSON.parse로 JSON값으로 변경해줌)
  //   // let latestViewed = JSON.parse(localStorage.getItem('latestViewed')) || [] ;  // 키 값이 없으면 []빈배열을 넣어준다
  //   // // 문제발생(id가 중복된 것도 DB에 들어가짐)
  //   // // id를 넣기 전에 기존 배열에 존재하는지 검사하거나
  //   // // 또는 일단 넣고 Set 자료형을 이용하여 중복 제거
  //   // latestViewed.push(docId);
  //   // latestViewed = new Set(latestViewed);  // Set객체로 반환한걸 배열로 바꿔줘야 함  (14_Set_map 에 자료 있음)
  //   // console.log(latestViewed);
  //   // // Array.from(latestViewed)  // Array.from() 배열로 바꿔주고 싶은 걸 괄호에 넣기 또는 ...스프레드 연산자로 배열로 변경
  //   // latestViewed = [...latestViewed];
  //   // localStorage.setItem('latestViewed', JSON.stringify(latestViewed));  // (넣어줄 때는 setItem이고 JSON을 문자열로 변경해줌 )

  //   // // Alert가 3초뒤에 없어지도록-----------------
  //   // const timeout = setTimeout(() => {
  //   //   setShowInfo(false);
  //   // }, 3000);
  //   // // 불필요하게 타이머가 계속 생기는 것을 정리하는 뒷정리 함수!!
  //   // return () => {
  //   //   clearTimeout(timeout);
  //   // };
  //   // ---------------------------------------------------
  // }, []);


// const groupTitme = '배고플 때 생각나는...';
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
const viewIndex = 'comment';
//---------------------------------------------------------------------------------------


  // const [recipeInfos, setrecipeInfos] = useState(recipeInfo);
  const [recipeInfos, setrecipeInfos] = useState(recipeItem);
  

  // console.log(recipes[0].subtitle);
  // console.log(recipeInfo[0].level);
  // console.log(recipeInfo[0].hashtags[0]);
  // 도전! 요리-------------------------------------------------------------------------
  // const {groupTitme, cookItemLists, viewIndex} = props;
  // console.log(cookItemList);


  //-------------------------------------------------------------------------------------
  const [reviewValue, setReviewValue] = React.useState({
    id: "",
    title: "",
    cardImagePath: "",
    userId: "",
    viewNo: "",
    likeNo: "",
    userComment: [{
      commentUserId: "",
      comment: "",
    }]
  });
  // console.log(reviewValue.cardImagePath);
  const handleChange = (e) => {
    const value = e.target.value;
    setReviewValue({
      ...reviewValue,
      [e.target.name] : value
    });
  }
  // const handleSubmit = {};
  // const fileInput = useRef(null);  // fileInput에 초기값은 null
  const handleSubmit = (e) => {
    // console.log(imgRef.current.value);
    // handleInsert(reviewValue);
    // saveImgFile();
    console.log(reviewValue.userComment[0].comment);
    // onInsert(reviewValue);
    setReviewValue('');
    e.preventDefault();
    // onHide();
  };
  


  // const handleInsert = useCallback((data) => {
  //   const { id, cardImagePath, commentUserId, comment } = data;
    
  //   const cookItemListAdd = {
  //     id: uuidv4(),
  //     cardImagePath,
  //     commentUserId,
  //     comment,
  //   };

  //   setReviewValue(cookItemList.concat(cookItemListAdd));
  //   // localStorage.setItem('todos', JSON.stringify(todos.concat(todo)))

  // }, [cookItemList]);

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef(null);
  // console.log(imgRef.current);
  // console.log(imgRef);

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    console.log(file.name);
    const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setImgFile(reader.result);
      };
  };

  const swiperRef = useRef();
  const swiperMainRef = useRef();

  // 링크 복사 기능---------------------------------
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
};
// console.log(handleCopyClipBoard);
let content = window.location.href;
// console.log(content);
// console.log(reviewValue.cardImagePath);
// console.log(imgRef.current.files[0].name);
console.log(recipeItem);

  return (
    <div className={styles['recipe-page']}>

      <section className={styles['main-wraper']}>
        <div className={styles.main}>
          <div className={styles['main--left']}>
            {/* <img src={recipes[0].image} alt="이미지" /> */}
            <div className={styles['left--imgwrapper']}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // navigation
                onBeforeInit={(swiper) => {
                swiperMainRef.current = swiper;
                }}
              >
                {recipeItem.imageFilesPath.map((image, index) => {
                  return <SwiperSlide key={index}><img src={image} alt='레시피이미지' /></SwiperSlide>
                })}
              </Swiper>
              <div>
                <button onClick={() => swiperMainRef.current?.slidePrev()} className={`${styles.btn_mainnavigation} ${styles.btn_mainprev}`}></button>
                <button onClick={() => swiperMainRef.current?.slideNext()} className={`${styles.btn_mainnavigation} ${styles.btn_mainnext}`}></button>
              </div>
            </div>
            <div className={styles['main--leftcounts']}>
                <LikeCount infos={recipeInfos} setrecipeInfos={setrecipeInfos} recipeItem={recipeItem} setRecipeItem={setRecipeItem}/> {/* // TODO : 2023-03-08 likecount 안먹음 */}
                <ViewCount infos={recipeInfos} setrecipeInfos={setrecipeInfos} />
            </div>
          </div>
          <div className={styles['main--right']}>
            <h2 className={styles['main--rightsubtitle']}>{recipeItem.subtitle}</h2>
            <h1 className={styles['main--righttitle']}>{recipeItem.title}</h1>
            <div className={styles['main--rightinfo']}>
              <span>난이도: {recipeItem.difficulty}</span>
              <span>양: {recipeItem.meals} 인분</span>
              <span>조리시간: {recipeItem.time}</span>
            </div>
            <div className={styles['main--righthashtag']}>
              {recipeItem.hashtags.map((hashtag, index) => {
                return (
                  <div key={index}>#{hashtag}</div>
                )
              })}
            </div>
            <div className={styles['main--rightbuttons']}>
              <ButtonKeeper />
              <button type='button' className={styles['btn-share']}>
                <img src={ require('./images/btn-share_brown.png') } />
                <p className={styles['arrow_box']}>공유하기</p>
              </button>
              <button type='button' className={styles['btn-linkcopy']} onClick={() => {handleCopyClipBoard(content)}}>
                <img src={ require('./images/btn-linkcopy_brown.png') } />
                <p className={styles['arrow_box']}>주소 복사하기</p>
              </button>
              <button type='button' className={styles['btn-kakaoshare']}>
                <img src={ require('./images/btn-kakaoshare.png') } />
                <p className={styles['arrow_box']}>카카오톡 공유</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles['content--ingredients']}>
          <h4>재료</h4>
          {inredientSum.map((ingredientItem)=>{
            return <span>{ingredientItem}, </span>
          })}
        </div>
        <ul className={styles['content--method']}>
          <h4>조리 방법</h4>
          {recipeItem.process.map((pro) => {
            return <li>{pro}</li>
          })}
        </ul>
      </section>

      <section className={styles.review}>
        <div className={styles['review--wrapper']}>
          <div className={styles['review--title']}>
            <h4 className={styles['font_eng']}>REVIEW</h4>
            <div className={styles['review--titlebottom']}>
              <p>오늘의 주제</p>
              <span className={styles['review--titlesubject']}>{recipeItem.title}</span>
              <p className={styles['review--titlesubtitle']}>회원들이 만든 요리</p>
            </div>
          </div>
          <div className={styles['review--inner']}>
            {/* TODO: 카드 컴포넌트 연결  */}
            {/* <CardList cookItemList={cookItemLists} viewIndex="comment" /> */}
            {/* <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={0}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // navigation
              onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
              }}
            >
                {cookItemList.map((cookItem) => {
                {recipeList.map((recipe) => {
                  return (
                    <SwiperSlide key={cookItem.id}>
                      <Card cookItem={cookItem} viewIndex={viewIndex} />
                      <Card key={recipe.docId} recipe={recipe} viewIndex={viewIndex} />
                    </SwiperSlide>
                    )
                  })
                }
            </Swiper> */}
            <div>
              <button onClick={() => swiperRef.current?.slidePrev()} className={`${styles.btn_navigation} ${styles.btn_prev}`}></button>
              <button onClick={() => swiperRef.current?.slideNext()} className={`${styles.btn_navigation} ${styles.btn_next}`}></button>
            </div>
          </div>
        </div>
        <ReviewRegiter cookItemList={cookItemList} setCookItemList={setCookItemList} />
        {/* <div className={styles['review--register']}>
          {imgRef.current
            ? <img className={styles['review--register-image']} src={imgFile ? imgFile :`/images/icon/user.png`} alt="프로필 이미지"/>
            :<label className={styles['input-file-button']} for="input-file"></label>}
          <input
            type="file" 
            id="input-file" 
            accept="image/*"
            onChange={saveImgFile}
            ref={imgRef}
            style={{display:"none"}} 
            name={reviewValue.cardImagePath}
          />
          <label 
            htmlFor="review--content" 
            className={styles['review--register--write']}
          >
            <textarea 
              // value={reviewValue.userComment}
              onChange={handleChange}
              id='review--content'
              name={reviewValue.userComment[0].comment}
              cols="2" rows="8" 
              placeholder='가장 좋아하는 것에 대한 에세이를 장석하세요'
            />
          </label>
          <button 
            type="button" 
            onClick={handleSubmit} 
            // onInsert={handleInsert} 
            className={styles['review--register--submit']}
          >SUBMIT</button>
        </div> */}
      </section>
    </div>
  );
}

export default RecipeDetail;