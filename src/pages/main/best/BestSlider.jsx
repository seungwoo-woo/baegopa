import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './BestSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Best from './Best';
import { Card } from 'react-bootstrap';

import { firebaseConfig } from '../../../pages/addrecipe/firestore';

// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, orderBy, limit } from "firebase/firestore";
import { number } from 'prop-types';
import { useEffect, useState } from 'react';
import BestCard from './BestCard';
// -------------------------------------------------------------------



const viewIndex = 'comment';
const keyword = [1]

function BestSlider(props) {

  const viewIndex = 'view';

  let recipeDbList = [];
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {

    const readRecipeDB = async () => {
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      let q = '';

      q = query(collection(db, "RecipeDB"), orderBy("likeCount", "desc"), limit(20)); //limit숫자 변경시 원하는 카드가 나옴



      const queryAllSnapshot = await getDocs(q);

      queryAllSnapshot.forEach((doc) => {
        const docCopy = { ...doc.data(), docId: doc._document.key.path.segments[6] };
        recipeDbList.push(docCopy);
      });
      setRecipeList(recipeDbList);

      console.log(recipeList);
    }

    readRecipeDB();

  }, []);

  return (

    <>
      <Best />

      <Swiper
        className={styles.swipermain}
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={4}
        navigation={{ prevEl: `.${styles['prev-button']}`, nextEl: `.${styles['next-button']}` }}
        pagination={{ clickable: true }}
      >
        {recipeList.map((recipe) => {
          return (
            <>
            <SwiperSlide className={styles.swiperi} >
              {/* <Card key={recipe.docId} recipe={recipe} viewIndex={viewIndex} /> */}
              <BestCard keyword={keyword}/>
            </SwiperSlide>
            </>
          );
        })}

        <button className={styles['prev-button']}></button>
        <button className={styles['next-button']}></button>
      </Swiper>
        {/* <Card key={recipeList[0].docId} recipe={recipeList[0]} viewIndex={viewIndex} /> */}
    </>

  );
}

export default BestSlider;
