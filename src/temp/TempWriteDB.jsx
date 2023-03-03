import React from 'react';
import '../App.css';

// === Firebase ===========================================================================
import { firebaseConfig } from '../pages/addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// ----------------------------------------------------------------------------------------


function TempWriteDB(props) {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const {lecipe} = props;

  let recipe = {};
  const title = lecipe.RCP_NM;                            
  recipe = {title: title, subtitle: `임시 서브 타이틀 - ${title}`, hashtags: ['해시태그1', '해시태그2', '해시태그3'] , meals: 2, time: 30, difficulty: '상' }
  console.log(recipe);                                    // recipe

  const material = lecipe.RCP_PARTS_DTLS;
  let materialForDB = material.split(',');              
  console.log(materialForDB);
  let ingredientItems = [];                                   // ingredients
  let ingredientUnits = [];
  let ingredientValues = [];
  materialForDB.forEach((ele, index) => {
    ingredientItems.push(ele.substr(0, ele.indexOf('('))); 
    ingredientUnits.push('개');
    ingredientValues.push('1');
  });
  console.log(ingredientItems);
  console.log(ingredientUnits);
  console.log(ingredientValues);
  
  let imageFilesPath = [];  // imageFilesPath
  const mainImgPath = lecipe.ATT_FILE_NO_MK;
  if (mainImgPath) {
    imageFilesPath.push(mainImgPath);
  }
  const subImgPath1 = lecipe.MANUAL_IMG01;
  if (subImgPath1) {
    imageFilesPath.push(subImgPath1);
  }
  const subImgPath2 = lecipe.MANUAL_IMG02;
  if (subImgPath2) {
    imageFilesPath.push(subImgPath2);
  }
  const subImgPath3 = lecipe.MANUAL_IMG03;
  if (subImgPath3) {
    imageFilesPath.push(subImgPath3);
  }
  const subImgPath4 = lecipe.MANUAL_IMG04;
  if (subImgPath4) {
    imageFilesPath.push(subImgPath4);
  }
  const subImgPath5 = lecipe.MANUAL_IMG05;
  if (subImgPath5) {
    imageFilesPath.push(subImgPath5);
  }
  console.log(imageFilesPath);

  let process = [];                         // process
  const p1 = lecipe.MANUAL01;
  process.push(p1);
  const p2 = lecipe.MANUAL02;
  process.push(p2);
  const p3 = lecipe.MANUAL03;
  if (p3) {
    process.push(p3);
  }
  const p4 = lecipe.MANUAL04;
  if (p4) {
    process.push(p4);
  }
  const p5 = lecipe.MANUAL05;
  if (p5) {
    process.push(p5);
  }  
  const p6 = lecipe.MANUAL06;
  if (p6) {
    process.push(p6);
  }
  const p7 = lecipe.MANUAL07;
  if (p7) {
    process.push(p7);
  }
  const p8 = lecipe.MANUAL08;
  if (p8) {
  process.push(p8);
  }
  const p9 = lecipe.MANUAL09;
  if (p9) {
  process.push(p9);
  }
  const p10 = lecipe.MANUAL10;
  if (p10) {
  process.push(p10);
  }
  console.log(process);    
  

// DB에 쓰기 함수 ---------------------------------------------------
const dbWrite = (recipe, ingredientItems, ingredientUnits, ingredientValues, process, imageFilesPath) => {

  try {
    const docRef = addDoc(collection(db, "RecipeDB"), {
      title: recipe['title'],
      subtitle: recipe['subtitle'],
      hashtags: recipe['hashtags'],
      meals: recipe['meals'],
      time: recipe['time'],
      difficulty: recipe['difficulty'],
      userId: "어우동",
      ingredientItems: ingredientItems,
      ingredientUnits: ingredientUnits,
      ingredientValues: ingredientValues,
      process: process,
      imageFilesPath: imageFilesPath,
      likeCount: 0,
      viewCount: 0
    });
    // alert("레시피가 저장되었습니다.");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  dbWrite(recipe, ingredientItems, ingredientUnits, ingredientValues, process, imageFilesPath);
  

  return (
    <div className='lecipeCard'>
      <h1>{title}</h1>

      <p>{material}</p>

      <div className='lecipeCardImg'>
        <img src={mainImgPath} width={300} ></img>
        <img src={subImgPath1} width={200} height={200}></img>
        <img src={subImgPath2} width={200} height={200}></img>
        <img src={subImgPath3} width={200} height={200}></img>
        <img src={subImgPath4} width={200} height={200}></img>
        <img src={subImgPath5} width={200} height={200}></img>

      </div>
      <h3>{p1}</h3>
      <h3>{p2}</h3>
      <h3>{p3}</h3>
      <h3>{p4}</h3>
      <h3>{p5}</h3>
      <h3>{p6}</h3>
      <h3>{p7}</h3>
      <h3>{p8}</h3>
      <h3>{p9}</h3>
      <h3>{p10}</h3>
    </div>
  );
}

export default TempWriteDB;