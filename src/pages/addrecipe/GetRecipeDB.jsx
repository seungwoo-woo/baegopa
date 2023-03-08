import React from 'react';
import { firebaseConfig } from './firestore';

// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
// -------------------------------------------------------------------



async function GetRecipeDB(props) {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  // 모든 recipe 불러오기
  // const queryAllSnapshot = await getDocs(collection(db, "RecipeDB"));

  // queryAllSnapshot.forEach((doc) => {
  //   // console.log('come in');
  //   console.log(doc._document.key.path.segments[6]);
  //   console.log("해시태그", doc.data().hashtags);
  //   console.log("난이도", doc.data().difficulty);
  //   console.log("이미지 경로", doc.data().imageFilesPath);
  //   console.log("재료명", doc.data().ingredientItems);
  //   console.log("수량", doc.data().ingredientValues);
  //   console.log("단위", doc.data().ingredientUnits);
  //   console.log("좋아요", doc.data().likeCount);
  //   console.log("요리양(인분)", doc.data().meals);
  //   console.log("요리과정", doc.data().process);
  //   console.log("간단한 설명", doc.data().subtitle);
  //   console.log("요리시간", doc.data().time);
  //   console.log("요리명", doc.data().title);
  //   console.log("아이디", doc.data().userId);
  //   console.log("조회수", doc.data().viewCount);
  // });




  // 1개 recipe 불러오기
  // const docRef = doc(db, "RecipeDB", "zzIFyU2l9zmYsvnd1OWw");
  // const docSnap = await getDoc(docRef);
  // console.log(docSnap.data());



  // 키워드 검색으로 불러오기
  const q = query(collection(db, "RecipeDB"), where("ingredientItems", "array-contains-any", ['양파']));
  // const q = query(collection(db, "RecipeDB"), where("ingredients", "array-contains", "고구마"), where("title", "==", "세가지샐러드"));
  // const q = query(collection(db, "RecipeDB"), where("ingredients", "array-contains-any", ["견과류(20g)", "개", "1"]));
  
  const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // console.log('come in');
    console.log(doc._document.key.path.segments[6]);
    console.log("해시태그", doc.data().hashtags);
    console.log("난이도", doc.data().difficulty);
    console.log("이미지 경로", doc.data().imageFilesPath);
    console.log("재료명", doc.data().ingredientItems);
    console.log("수량", doc.data().ingredientValues);
    console.log("단위", doc.data().ingredientUnits);
    console.log("좋아요", doc.data().likeCount);
    console.log("요리양(인분)", doc.data().meals);
    console.log("요리과정", doc.data().process);
    console.log("간단한 설명", doc.data().subtitle);
    console.log("요리시간", doc.data().time);
    console.log("요리명", doc.data().title);
    console.log("아이디", doc.data().userId);
    console.log("조회수", doc.data().viewCount);
  });

  return (
    <>
    </>
  )

}

export default GetRecipeDB;