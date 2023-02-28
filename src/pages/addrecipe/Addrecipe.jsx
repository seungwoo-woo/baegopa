import React, { useRef, useState } from 'react';
import './Addrecipe.css';

// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// -------------------------------------------------------------------



function Addrecipe(props) {


  // Your web app's Firebase configuration
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
  const db = getFirestore(app);
  const storage = getStorage(app);


  // image files 선택 ------------------------------------------ 
  const [ imageFiles, setImageFiles ] = useState([]);
  const [ fileSelect, setFileSelect ] = useState('파일 선택');

  const handleChangeImage = (e) => {
    setImageFiles((imageFiles) => {
      return [Array.from(e.target.files), ...imageFiles]});
    setFileSelect(`${Array.from(e.target.files)[0]['name']} 파일 외 ${Array.from(e.target.files).length-1}개 파일 선택 됨`);
    console.log(imageFiles);
  }



// DB에 쓰기 함수 ---------------------------------------------------
  const dbWrite = (recipe, material, process, imageFilesPath) => {

  try {
    const docRef = addDoc(collection(db, "RecipeDB"), {
      title: recipe['title'],
      time: recipe['time'],
      difficulty: recipe['difficulty'],
      userId: "어우동",
      material: material,
      process: process,
      imageFilesPath: imageFilesPath
    });
    alert("레시피가 저장되었습니다.");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


// Submit 핸들함수 -----------------------------------------------------------------
  const handleClickSubmit = () => {
    console.log('in');  
    
    let imageFilesPath = [];

    imageFiles[0].forEach((element) => {
      let storageRef = ref(storage, `images/${element['name']}`);

      const uploadTask = uploadBytesResumable(storageRef, element);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');  
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          imageFilesPath.push(downloadURL);
          console.log(imageFiles[0].length);
          console.log(imageFilesPath.length);

          if(imageFiles[0].length === imageFilesPath.length) { 
            dbWrite(recipeSummary, materialItems, processItems, imageFilesPath);
          }
        });
        }
      );  
    });
  }



  // 1. 요리명, 요리시간/난이도  ------------------------------------------------------------
  const [recipeSummary, setRecipeSummary] = useState({ title: '', time: '', difficulty: '' });

  // 요리명 변경 -------------------------------------------------------------
  function handleChangeRecipeTitle(e) {    
    const recipeSummaryCopy = JSON.parse(JSON.stringify(recipeSummary));
    recipeSummaryCopy.title = e.target.value;  
    setRecipeSummary(recipeSummaryCopy);		            
  }

  // 요리시간/난이도 변경 -------------------------------------------------------------
  function handleChangeTimeDifficulty(e) {
    const recipeSummaryCopy = JSON.parse(JSON.stringify(recipeSummary));
    recipeSummaryCopy.time = e.target.value; 
    if (Number(e.target.value) <= 30) {
      recipeSummaryCopy.difficulty = '하';
    } else if (Number(e.target.value) <= 60) {
      recipeSummaryCopy.difficulty = '중';
    } else if (Number(e.target.value) > 60) {
      recipeSummaryCopy.difficulty = '상';
    }
    setRecipeSummary(recipeSummaryCopy);		            
  }
  // ------------------------------------------------------------------------------------------------------



  // 2. 재료 추가/삭제 ------------------------------------------------------------
  const nextID2 = useRef(1);
  const [materialItems, setMaterialItems] = useState([{ id: 0, material: '', unit: '', value: '' },]);

  function addMaterialItem() {
    const input = {			                   
      id: nextID2.current,		               
      material: '',
      unit: '',
      value: ''			                     
    };

    setMaterialItems([...materialItems, input]); 
    
    nextID2.current += 1; 		               
  }

  function deleteMaterialItem(index) {                                    
    if (nextID2.current > 1) {
      setMaterialItems(materialItems.filter(item => item.id !== index)); 

      nextID2.current -= 1;
    } 
  }

  function handleChangeMaterial(e, index) {
  if (index > materialItems.length) return;  
  
  const materialItemsCopy = JSON.parse(JSON.stringify(materialItems));
  materialItemsCopy[index].material = e.target.value;  
  setMaterialItems(materialItemsCopy);		  
  }

  function handleChangeMaterialUnit(e, index) {
    if (index > materialItems.length) return; 

  const materialItemsCopy = JSON.parse(JSON.stringify(materialItems));
  materialItemsCopy[index].unit = e.target.value;  
  setMaterialItems(materialItemsCopy);		  
  }

  function handleChangeMaterialValue(e, index) {
    if (index > materialItems.length) return; 

  const materialItemsCopy = JSON.parse(JSON.stringify(materialItems));
  materialItemsCopy[index].value = e.target.value;  
  setMaterialItems(materialItemsCopy);		  
  }
  // ------------------------------------------------------------------------------------------------------



  // 3. 조리방법 추가/삭제 ------------------------------------------------------------
  const nextID = useRef(1);
  const [processItems, setProcessItems] = useState([{ id: 0, process: '' },]);

  function addProcessItem() {
    const input = {			                   
      id: nextID.current,		               
      process: '',			                     
    };

    setProcessItems([...processItems, input]); 
    nextID.current += 1; 		               
  }

  function deleteProcessItem(index) {                                    
    if (nextID.current > 1) {
      setProcessItems(processItems.filter(item => item.id !== index)); 
      nextID.current -= 1;
    } 
  }

  function handleChangeProcess(e, index) {
  if (index > processItems.length) return; 
  
  const processItemsCopy = JSON.parse(JSON.stringify(processItems));
  processItemsCopy[index].process = e.target.value; 
  setProcessItems(processItemsCopy);		  
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
          <span style={{color: 'red'}}>*</span>
          <div>
            <input type="file" name='photo' id='upload-photo' onChange={handleChangeImage} accept="image/*" multiple style={{ display: "none" }}/>
            <div className='input-file-button'>
              <label for='upload-photo'>{fileSelect}</label>
              <p class="material-symbols-outlined">attach_file_add </p>
            </div>
          </div>

          <span>요리명</span>
          <span style={{color: 'red'}}>*</span>
          <div>
            <input type="text" className='recipeTitle' onChange={e => handleChangeRecipeTitle(e)}></input>
          </div>

          <span>요리시간(분) / 난이도</span>
          <span style={{color: 'red'}}>*</span>
          <div>
            <input type="text" className='timeRecipe' onChange={e => handleChangeTimeDifficulty(e)}></input>
            <span style={{color: 'black', fontWeight: 400}}>분 / </span>
            <input type="text" className='timeRecipe' value={recipeSummary.difficulty || '난이도'}></input>
          </div>

          <div style={{ marginBottom: 10}} >
            <span>재료</span>
            <span style={{color: 'red'}}>*</span>
          </div>

          {materialItems.map((item, index) => {
            return (
            <div className='materialBox'>
              <input type="text" className='materialRecipe' style={{marginTop: "10"}}
                onChange={e => handleChangeMaterial(e, index)}
                value={item.title}
              ></input>
              <select onChange={e => handleChangeMaterialUnit(e, index) }>
                <option value="단위">단위</option>
                <option value="컵">컵</option>
                <option value="스푼">스푼</option>
              </select>
              <input type="text" className='unitRecipe'
                onChange={e => handleChangeMaterialValue(e, index)}
                value={item.value}
              ></input>

              { index === 0 && 
                <>
                <button className='plusMinus' onClick={addMaterialItem}>+</button>
                <button className='plusMinus' onClick={() => deleteMaterialItem(nextID2.current-1)}>-</button>
                </> }
            </div>)})}


          <div style={{marginTop: 20, marginBottom: 10}} >
            <span>조리방법</span>
            <span style={{color: 'red'}}>*</span>
          </div>

          {processItems.map((item, index) => {
            return (
            <div className='processlBox'>
              <input type="text" className='processRecipe' 
                placeholder='조리순서...'
                onChange={e => handleChangeProcess(e, index)}
                value={item.title}
                >
              </input>
              { index === 0 && 
                <>
                  <button className='plusMinus' onClick={addProcessItem}>+</button>
                  <button className='plusMinus' onClick={() => deleteProcessItem(nextID.current-1)}>-</button>
                </>}   
            
            </div>

          )})}
          
        </div>

        <div className='addRecipeFooter'> 
          <button>CANCLE</button>
          <button className='submitButton' onClick={handleClickSubmit}>SUBMIT</button>
        </div>

      </div>
    </>
  );
}

export default Addrecipe;