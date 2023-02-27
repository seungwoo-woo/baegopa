import React, { useRef, useState } from 'react';
import './Addrecipe.css';

// === Firebase ========================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function Addrecipe(props) {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDT5M_fwLAtIvcInwdTXni3wQIWW5JUx2A",
    authDomain: "baegopa-e886a.firebaseapp.com",
    projectId: "baegopa-e886a",
    storageBucket: "baegopa-e886a.appspot.com",
    messagingSenderId: "30036889772",
    appId: "1:30036889772:web:fabf6d0ba28fc8eaf4cf09",
    measurementId: "G-DKGSL9EP7X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  // const mountainsRef = ref(storage, 'mountains.jpg');
  // const mountainImagesRef = ref(storage, 'images/mountains.jpg');
 
  // const storageRef2 = ref(storage, 'some-child2');

  // uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log('Uploaded a blob or file!');
  // })

  // console.log(mountainsRef);
  // console.log(mountainImagesRef);

  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    console.log(e.target.files[1]);
    let storageRef = ref(storage, e.target.files[0]['name'] );

    uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      })
    
      storageRef = ref(storage, e.target.files[1]['name'] );
      uploadBytes(storageRef, e.target.files[1]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      })


  }
 


  const dbtest = async (recipeName, material, process) => {

  try {
    const docRef = await addDoc(collection(db, "RecipeDB"), {
      title: recipeName[0]['title'],
      time: recipeName[0]['time'],
      userId: "어우동",
      material: material,
      process: process
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  const handleClickSubmit = () => {
    dbtest(recipeName, inputItems2, inputItems);
  }




  // 요리명, 요리시간/난이도 ------------------------------------------------------------
  const [recipeName, setRecipeName] = useState([{ title: '', time: '', difficulty: '' },]);

  function handleChange5(e) {
    
  // 인풋배열을 copy 해주자
  const recipeNameCopy = JSON.parse(JSON.stringify(recipeName));
  recipeNameCopy[0].title = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자 
  setRecipeName(recipeNameCopy);		            // 그걸 InputItems 에 저장해주자
  }

  function handleChange6(e) {
    const recipeNameCopy = JSON.parse(JSON.stringify(recipeName));
    recipeNameCopy[0].time = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자
    if (Number(e.target.value) <= 30) {
      recipeNameCopy[0].difficulty = '하';
    } else if (Number(e.target.value) <= 60) {
      recipeNameCopy[0].difficulty = '중';
    } else if (Number(e.target.value) > 60) {
      recipeNameCopy[0].difficulty = '상';
    }
    setRecipeName(recipeNameCopy);		            // 그걸 InputItems 에 저장해주자
    }

  // ------------------------------------------------------------------------------------------------------



  // 재료 추가/삭제 ------------------------------------------------------------
  const nextID2 = useRef(1);
  const [inputItems2, setInputItems2] = useState([{ id: 0, material: '', unit: '', value: '' },]);
  // const [inputItems3, setInputItems3] = useState([{ id: 0, title: '' },]);

  function addInput2() {
    const input = {			                   // 새로운 인풋객체를 하나 만들고,
      id: nextID2.current,		               // id 값은 변수로 넣어주고,
      material: '',
      unit: '',
      value: ''			                     // 내용은 빈칸으로 만들자
    };

    setInputItems2([...inputItems2, input]); // 기존 값에 새로운 인풋객체를 추가해준다.
    // setInputItems3([...inputItems3, input]); // 기존 값에 새로운 인풋객체를 추가해준다.
    
    nextID2.current += 1; 		               // id값은 1씩 늘려준다.
  }

  function deleteInput2(index) {                                    // 인덱스 값을 받아서
    if (nextID2.current > 1) {
      setInputItems2(inputItems2.filter(item => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
      // setInputItems3(inputItems3.filter(item => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다

      nextID2.current -= 1;
    } 
  }

  function handleChange2(e, index) {
  if (index > inputItems2.length) return; // 예외처리
  
  // 인풋배열을 copy 해주자
  const inputItemsCopy2 = JSON.parse(JSON.stringify(inputItems2));
  inputItemsCopy2[index].material = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자 
  setInputItems2(inputItemsCopy2);		  // 그걸 InputItems 에 저장해주자
  }


  function handleChange3(e, index) {
    if (index > inputItems2.length) return; // 예외처리

  // 인풋배열을 copy 해주자
  const inputItemsCopy2 = JSON.parse(JSON.stringify(inputItems2));
  inputItemsCopy2[index].value = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자 
  setInputItems2(inputItemsCopy2);		  // 그걸 InputItems 에 저장해주자
  }

  function handleChange4(e, index) {
    if (index > inputItems2.length) return; // 예외처리

  // 인풋배열을 copy 해주자
  const inputItemsCopy2 = JSON.parse(JSON.stringify(inputItems2));
  inputItemsCopy2[index].unit = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자 
  setInputItems2(inputItemsCopy2);		  // 그걸 InputItems 에 저장해주자
  }
  // ------------------------------------------------------------------------------------------------------



  // 조리방법 추가/삭제 ------------------------------------------------------------
  const nextID = useRef(1);
  const [inputItems, setInputItems] = useState([{ id: 0, process: '' },]);

  function addInput() {
    const input = {			                   // 새로운 인풋객체를 하나 만들고,
      id: nextID.current,		               // id 값은 변수로 넣어주고,
      process: '',			                     // 내용은 빈칸으로 만들자
    };

    setInputItems([...inputItems, input]); // 기존 값에 새로운 인풋객체를 추가해준다.
    nextID.current += 1; 		               // id값은 1씩 늘려준다.
  }

  function deleteInput(index) {                                    // 인덱스 값을 받아서
    if (nextID.current > 1) {
      setInputItems(inputItems.filter(item => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
      nextID.current -= 1;
    } 
  }

  function handleChange(e, index) {
  if (index > inputItems.length) return; // 예외처리
  
  // 인풋배열을 copy 해주자
  const inputItemsCopy = JSON.parse(JSON.stringify(inputItems));
  inputItemsCopy[index].process = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자 
  setInputItems(inputItemsCopy);		  // 그걸 InputItems 에 저장해주자
}
// ------------------------------------------------------------------------------------------------------

  
  return (
    <>
      <div className='addRecipeWrapper'> 
        <div className='header'>
          <h1>레시피 등록하기</h1>
          <button>X</button>
        </div>

        <div className='addRecipeBody'>
          <span>사진첨부</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="file" name='photo' id='upload-photo' onChange={handleChangeImage} accept="image/*" multiple style={{ display: "none" }}/>
            <div className='input-file-button'>
              <label for='upload-photo'>파일 선택</label>
              <p class="material-symbols-outlined">attach_file_add </p>
            </div>
          </div>

          <span>요리명</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="text" className='recipeTitle' onChange={e => handleChange5(e)}></input>
          </div>

          <span>요리시간(분) / 난이도</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="text" className='timeRecipe' onChange={e => handleChange6(e)}></input>
            <span style={{color: 'black', fontWeight: 400}}>분 / </span>
            <input type="text" className='timeRecipe' value={recipeName[0].difficulty || '난이도'}></input>
          </div>

          <div style={{ marginBottom: 10}} >
            <span>재료</span>
            <sapn style={{color: 'red'}}>*</sapn>
          </div>

          {inputItems2.map((item, index) => {
            return (
            <div className='materialBox'>
              <input type="text" className='materialRecipe' style={{marginTop: "10"}}
                onChange={e => handleChange2(e, index)}
                value={item.title}
              ></input>
              <select onChange={e => handleChange4(e, index) }>
                <option value="단위">단위</option>
                <option value="컵">컵</option>
                <option value="스푼">스푼</option>
              </select>
              <input type="text" className='unitRecipe'
                onChange={e => handleChange3(e, index)}
                value={item.value}
              ></input>

              { index === 0 && 
                <>
                <button className='plusMinus' onClick={addInput2}>+</button>
                <button className='plusMinus' onClick={() => deleteInput2(nextID2.current-1)}>-</button>
                </> }
            </div>)})}


          <div style={{marginTop: 20, marginBottom: 10}} >
            <span>조리방법</span>
            <sapn style={{color: 'red'}}>*</sapn>
          </div>

          {inputItems.map((item, index) => {
            return (
            <div className='processlBox'>
              <input type="text" className='processRecipe' 
                placeholder='조리순서...'
                onChange={e => handleChange(e, index)}
                value={item.title}
                >
              </input>
              { index === 0 && 
                <>
                  <button className='plusMinus' onClick={addInput}>+</button>
                  <button className='plusMinus' onClick={() => deleteInput(nextID.current-1)}>-</button>
                </>}
              
            
            </div>

          )})}
          {/* <div> */}
            {/* <input type="text" className='processRecipe' placeholder='조리순서 2.'></input> */}
          {/* </div>  */}
          
        </div>

        {console.log(recipeName)}
        {console.log(inputItems2)}
        {console.log(inputItems)}

        <div className='addRecipeFooter'> 
          <button>CANCLE</button>
          <button className='submitButton' onClick={handleClickSubmit}>SUBMIT</button>
        </div>

      </div>
    </>
  );
}

export default Addrecipe;