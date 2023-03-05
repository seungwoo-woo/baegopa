import styles from './CardList.module.css';

import Card from './Card';

import React, { useEffect, useState } from 'react';

import { firebaseConfig } from '../pages/addrecipe/firestore';

// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
// -------------------------------------------------------------------



function CardList(props) {

  const groupTitme = '레시피 검색결과 Edit12';
  
  const viewIndex = 'view';

  let recipeDbList = [];    
  const [ recipeList, setRecipeList ] = useState([]);
  
  const readRecipeDB = async () => {
  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", ['닭고기', '양파', '두부', ' 당근', ' 오징어']));
    const queryAllSnapshot = await getDocs(q); 

    queryAllSnapshot.forEach((doc) => {
    const docCopy = {...doc.data(), docId: doc._document.key.path.segments[6]};
    recipeDbList.push(docCopy);
    });
    setRecipeList(recipeDbList);
  }

  readRecipeDB();


  return (

    <div className={styles.group}>
      <h1>{groupTitme}</h1>
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