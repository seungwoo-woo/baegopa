import styles from './CardList.module.css';

import Card from './Card';

import React, { useEffect, useState } from 'react';

import { firebaseConfig } from '../pages/addrecipe/firestore';

// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, orderBy, limit } from "firebase/firestore";
import { number } from 'prop-types';
// -------------------------------------------------------------------



function CardList(props) {

  const { keyword } = props;
  let keywordList = Array.isArray(keyword) ? [...keyword] : [keyword];
  
  const viewIndex = 'comment';

  let recipeDbList = [];    
  const [ recipeList, setRecipeList ] = useState([]);
  
  useEffect (() => {

    const readRecipeDB = async () => {
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      let q = '';
      // 조건별 검색 식 설정
      // console.log(typeof(keywordList[0]));
      let randomCount = -1;
      if( !isNaN(keywordList[0])) {

        console.log('숫자에 들어옴')
        randomCount = Math.floor(Math.random()*50);
        if (keywordList[0] !== 1) {
          if( randomCount > (120 - keywordList[0])) {
            randomCount = randomCount - keywordList[0];
          }
        }
        q = query(collection(db, "RecipeDB"));

      } else if (keywordList[0] === 'like') {
        // console./log('like에 들오옴');
        q = query(collection(db, "RecipeDB"), orderBy("likeCount", "desc"), limit(8));
      } else if (keywordList[0].slice(-1) === '식') {

        // console.log('식에 들어옴');

        q = query(collection(db, "RecipeDB"), where("division", "in", keywordList), limit(8));
      } else {
        q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", keywordList));
      }
            
      // console.log(keywordList[0]);
      // console.log(q);

      // const q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", ['닭고기', '양파', '두부', ' 당근', ' 오징어']));
      // const q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", keywordList));

      const queryAllSnapshot = await getDocs(q); 
  
      queryAllSnapshot.forEach((doc) => {
      const docCopy = {...doc.data(), docId: doc._document.key.path.segments[6]};
      recipeDbList.push(docCopy);
      // console.log(docCopy);
      });
      // console.log(queryAllSnapshot);

      if (randomCount >= 0) {
        setRecipeList(recipeDbList.slice(randomCount, randomCount + keywordList[0]));
      } else {
        setRecipeList(recipeDbList);
      };
      
      // console.log(recipeList);
    }
    
    readRecipeDB();

  }, []);

  console.log(recipeList);
  return (

    <div className={styles.group}>
      <div className={styles.cardList}>
        {recipeList.map((recipe) => {
          return <Card key={recipe.docId} recipe={recipe} viewIndex={viewIndex} />
        })
        }
      </div>
    </div>
  );
}

export default CardList;  