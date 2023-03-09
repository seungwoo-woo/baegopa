import React, { Fragment, useEffect, useState } from 'react';
import styles from './Today.module.css'
import likeIconImage from "../img/like_icon.png";
import LikeCount from '../../recipe/components/LikeCount';
import ViewCount from '../../recipe/components/ViewCount';
import Counters from '../app/Counters';
import View from '../app/View';
import { Link, BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import BestCard from './BestCard';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> feature/CardCss

import { firebaseConfig } from '../../../pages/addrecipe/firestore';

// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, orderBy, limit } from "firebase/firestore";
import { number } from 'prop-types';
// -------------------------------------------------------------------










function Today(props) {
<<<<<<< HEAD
  const navigate = useNavigate(); 

=======
>>>>>>> feature/CardCss
  const keyword = [1];
  let keywordList = [];
  keywordList = [...keyword];
  // const groupTitme = '레시피 검색결과 Edit13';
<<<<<<< HEAD
=======

>>>>>>> feature/CardCss
  const viewIndex = 'view';

  let recipeDbList = [];
  const [recipeList, setRecipeList] = useState([{
    difficulty: "",
    docId: "",
    hashtags: [],
    imageFilesPath: [],
    ingredientItems: [],
    ingredientUnits: [],
    ingredientValues: [],
    likeCount: 0,
    meals: 0,
    process: [],
    subtitle: "",
    time: 0,
    title: "",
    userId: "",
    viewCount: 0
  }]);

<<<<<<< HEAD
  console.log(recipeList);

=======
>>>>>>> feature/CardCss
  useEffect(() => {

    const readRecipeDB = async () => {
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      let q = '';
      // 조건별 검색 식 설정
      console.log(typeof (keywordList[0]));
      let randomCount = -1;
      if (!isNaN(keywordList[0])) {

        console.log('숫자에 들어옴')
<<<<<<< HEAD
        randomCount = Math.floor(Math.random() * 50);
=======
        randomCount = Math.floor(Math.random() * 120);
>>>>>>> feature/CardCss
        if (keywordList[0] !== 1) {
          if (randomCount > (120 - keywordList[0])) {
            randomCount = randomCount - keywordList[0];
          }
        }
        q = query(collection(db, "RecipeDB"));

      } else if (keywordList[0] === 'like') {
        console.log('like에 들오옴');
        q = query(collection(db, "RecipeDB"), orderBy("likeCount", "desc"), limit(8));
      } else if (keywordList[0].slice(-1) === '식') {
        console.log('식에 들어옴');
        q = query(collection(db, "RecipeDB"), where("division", "in", keywordList), limit(8));
      } else {
        q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", keywordList));
      }

      console.log(keywordList[0]);
      console.log(q);

      // const q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", ['닭고기', '양파', '두부', ' 당근', ' 오징어']));
      // const q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", keywordList));

      const queryAllSnapshot = await getDocs(q);

      queryAllSnapshot.forEach((doc) => {
        const docCopy = { ...doc.data(), docId: doc._document.key.path.segments[6] };
        recipeDbList.push(docCopy);

      });

      if (randomCount >= 0) {
        setRecipeList(recipeDbList.slice(randomCount, randomCount + keywordList[0]));
      } else {
        setRecipeList(recipeDbList);
      };

      console.log(recipeList);
      console.log(recipeDbList);
    }

    readRecipeDB();

  }, []);
<<<<<<< HEAD

  const handleRecipeClick = (docId) => {
    console.log(docId);
    navigate('/recipe/' + docId);
  };
=======
>>>>>>> feature/CardCss

  return (
    <>
      <Fragment>
        <Nav.Link className={styles.hd} as={Link} to="/recipe">Today's menu</Nav.Link>
      </Fragment>
      <div className={styles.bg}>
        <div className={styles.stymain}>
<<<<<<< HEAD
          <Nav.Link className={styles.stybigiamge} as={Link} to={'/recipe/' + recipeList[0].docId}>
            <img onClick={() => handleRecipeClick(recipeList[0].docId)} src={recipeList[0].imageFilesPath[0]} alt="이미지" />
          </Nav.Link>
          <div className={styles.boximg}>
            <Nav.Link className={styles.box} as={Link} to={'/recipe/' + recipeList[0].docId}>
              <img onClick={() => handleRecipeClick(recipeList[0].docId)} src={recipeList[0].imageFilesPath[1]} alt="이미지" />
            </Nav.Link>
            <Nav.Link className={styles.box} as={Link} to={'/recipe/' + recipeList[0].docId}>
              <img onClick={() => handleRecipeClick(recipeList[0].docId)} src={recipeList[0].imageFilesPath[2]} alt="이미지" />
=======
          <Nav.Link className={styles.stybigiamge} as={Link} to="/recipe">
        <img src={recipeList[0].imageFilesPath[0]} alt="이미지" />
          </Nav.Link>
          <div className={styles.boximg}>
            <Nav.Link className={styles.box} as={Link} to="/recipe">
              <img src={recipeList[0].imageFilesPath[1]} alt="이미지" />
            </Nav.Link>
            <Nav.Link className={styles.box} as={Link} to="/recipe">
              <img src={recipeList[0].imageFilesPath[2]} alt="이미지" />
>>>>>>> feature/CardCss
            </Nav.Link>
            <div className={styles.styli}>
              <div>
                <h1 >{recipeList[0].title}</h1>
              </div>
              <div>
                <p  >{recipeList[0].subtitle}</p>
              </div>
              <div>
<<<<<<< HEAD
                <p>{recipeList[0].process}</p>
              </div>
              <div>
=======
>>>>>>> feature/CardCss
                <div className={styles.styicon}>
                  {/* <Counters/> */}
                  {/* <button onClick={incrementViews}>글을 클릭하면 조회수가 오르게</button> */}
                  {/* <View className={styles.vie} views={views}/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Today;