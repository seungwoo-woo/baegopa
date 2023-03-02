import React, { useCallback, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import styles from "./css/recipeDetail.module.css";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import CardList from '../../components/CardList';
import Card from './../../components/Card';
import LikeCount from './components/LikeCount';
import ViewCount from './components/ViewCount';
import ButtonKeeper from './components/ButtonKeeper';
import ReviewRegiter from './components/ReviewRegiter';



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

// const groupTitme = '배고플 때 생각나는...';
const cookItemList = [
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
];

const viewIndex = 'comment';

// -------------------------------------------------------------------------------------------------


function RecipeDetail(props) {

  const [recipeInfos, setrecipeInfos] = useState(recipeInfo);

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
  console.log(reviewValue.cardImagePath);
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
console.log(reviewValue.cardImagePath);
// console.log(imgRef.current.files[0].name);

  return (
    <div className={styles['recipe-page']}>
      <section className={styles.nav}>
        NAV영역
      </section>

      <section className={styles['main-wraper']}>
        <div className={styles.main}>
          <div className={styles['main--left']}>
            {/* <img src={recipes[0].image} alt="이미지" /> */}
            <div className={styles['main--left--img']}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // navigation
                onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
                }}
              >
                  {/* {recipes.map((recipe) => {
                    return (
                      <>
                        <SwiperSlide><img src={recipe.image01} alt="이미지1" /></SwiperSlide>
                        <SwiperSlide><img src={recipe.image02} alt="이미지2" /></SwiperSlide>
                        <SwiperSlide><img src={recipe.image03} alt="이미지3" /></SwiperSlide>
                        <SwiperSlide><img src={recipe.image04} alt="이미지4" /></SwiperSlide>
                        <SwiperSlide><img src={recipe.image05} alt="이미지5" /></SwiperSlide>
                      </>
                      )
                    })
                  } */}
                <SwiperSlide><img src={recipes[0].image01} alt="이미지1" /></SwiperSlide>
                <SwiperSlide><img src={recipes[0].image02} alt="이미지2" /></SwiperSlide>
                <SwiperSlide><img src={recipes[0].image03} alt="이미지3" /></SwiperSlide>
                <SwiperSlide><img src={recipes[0].image04} alt="이미지4" /></SwiperSlide>
                <SwiperSlide><img src={recipes[0].image05} alt="이미지5" /></SwiperSlide>
              </Swiper>
            </div>
            <div className={styles['main--left--counts']}>
                {/* {
                  recipeInfos.map((info, index) => {
                    return <LikeCount index={[0]} likeCounts={info.likeCounts} setrecipeInfos={setrecipeInfos}/>
                  })
                } */}
                <LikeCount infos={recipeInfos} setrecipeInfos={setrecipeInfos}/>
                <ViewCount infos={recipeInfos} setrecipeInfos={setrecipeInfos}/>
            </div>
          </div>
          <div className={styles['main--right']}>
            <h2 className={styles['main--right--subtitle']}>{recipes[0].subtitle}</h2>
            <h1 className={styles['main--right--title']}>{recipes[0].title}</h1>
            <div className={styles['main--right--info']}>
              <span>난이도: {recipeInfo[0].level}</span>
              <span>양: {recipeInfo[0].meals} 인분</span>
              <span>조리시간: {recipeInfo[0].time}</span>
            </div>
            <div className={styles['main--right--hashtag']}>
              {recipeInfo[0].hashtags.map((hashtag, index) => {
                return (
                  <div key={index}>#{hashtag}</div>
                )
              })}
            </div>
            <div className={styles['main--right--buttons']}>
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
          <p>{recipes[0].ingredients}</p>
        </div>
        <ul className={styles['content--method']}>
          <h4>조리 방법</h4>
          <li>{recipes[0].manual01}</li>
          <li>{recipes[0].manual02}</li>
          <li>{recipes[0].manual03}</li>
          <li>{recipes[0].manual04}</li>
          <li>{recipes[0].manual05}</li>
          <li>{recipes[0].manual06}</li>
        </ul>
      </section>

      <section className={styles.review}>
        <div className={styles['review--wrapper']}>
          <div className={styles['review--title']}>
            <h4 className={styles['font_eng']}>REVIEW</h4>
            <div className={styles['review--title--bottom']}>
              <p>오늘의 주제</p>
              <span className={styles['review--title--bottom--subject']}>김치찌개</span>
              <p className={styles['review--title--bottom-subtitle']}>회원들이 만든 요리</p>
            </div>
          </div>
          <div className={styles['review--inner']}>
            {/* TODO: 카드 컴포넌트 연결  */}
            {/* <CardList cookItemList={cookItemLists} viewIndex="comment" /> */}
            <Swiper
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
                  return (
                    <SwiperSlide key={cookItem.id}>
                      <Card cookItem={cookItem} viewIndex={viewIndex} />
                    </SwiperSlide>
                    )
                  })
                }
            </Swiper>
            <div>
              <button onClick={() => swiperRef.current?.slidePrev()} className={`${styles.btn_navigation} ${styles.btn_prev}`}></button>
              <button onClick={() => swiperRef.current?.slideNext()} className={`${styles.btn_navigation} ${styles.btn_next}`}></button>
            </div>
          </div>
        </div>
        <div className={styles['review--register']}>
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
        </div>
        <ReviewRegiter />
      </section>

      <section className={styles.footer}>
        Footer영역
      </section>

    </div>
  );
}

export default RecipeDetail;