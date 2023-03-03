import React from 'react';
import { firebaseConfig } from './firestore';

// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
// -------------------------------------------------------------------



async function GetRecipeDB(props) {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // const q = query(collection(db, "RecipeDB"), where("ingredients", "array-contains", "고구마"), where("title", "==", "세가지샐러드"));
  const q = query(collection(db, "RecipeDB"), where("ingredients", "array-contains-any", ["견과류(20g)", "개", "1"]));


  // const querySnapshot = await getDocs(collection(db, "RecipeDB"));
  const querySnapshot = await getDocs(q);


  console.log((typeof(querySnapshot)));

  querySnapshot.forEach((doc) => {
    console.log('come in');
    console.log(typeof(doc));
    console.log("해시태그", doc.data().hashtags);
    console.log("난이도", doc.data().difficulty);
    console.log("이미지 경로", doc.data().imageFilesPath[0]);
    console.log("재료명", doc.data().ingredients[0]);
    console.log("좋아요", doc.data().likeCount);
    console.log("요리양(인분)", doc.data().meals);
    console.log("요리과정", doc.data().process[0]);
    console.log("간단한 설명", doc.data().subtitle);
    console.log("요리시간", doc.data().time);
    console.log("요리명", doc.data().title);
    console.log("아이디", doc.data().userId);
    console.log("조회수", doc.data().viewCount);
    return;
  });


  return (
    <>
    </>
  )
}

export default GetRecipeDB;