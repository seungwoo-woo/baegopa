import React, { useRef, useState } from 'react';
import './Addrecipe.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
// === Firebase ===========================================================================
import { firebaseConfig } from './firestore.js';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router';
// ----------------------------------------------------------------------------------------


function Addrecipe(props) {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const navigate = useNavigate(); 



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
  const dbWrite = async (recipe, ingredientItems, ingredientUnits, ingredientValues, process, imageFilesPath) => {


  try {
    const docRef = await addDoc(collection(db, "RecipeDB"), {
      title: recipe['title'],
      subtitle: recipe['subtitle'],
      hashtags: recipe['hashtags'],
      meals: recipe['meals'],
      division: recipe['division'],
      time: recipe['time'],
      difficulty: recipe['difficulty'],
      userId: "어우동",
      userComment: [{
        userId: '',
        comment: '',
        imgPath: ''
      }],
      ingredientItems: ingredientItems,
      ingredientUnits: ingredientUnits,
      ingredientValues: ingredientValues,
      process: process,
      imageFilesPath: imageFilesPath,
      likeCount: 0,
      viewCount: 0
    });
    console.log("Document written with ID: ", docRef.id);
    alert("레시피가 저장되었습니다.");
    navigate('/recipe/'+ docRef.id);
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
          
            const processItems2 = processItems.map((item) => {
              return item['process'];
            })
            
            const ingredientItems = ingredients.map((item) => {
              return item['ingredient'];
            })

            const ingredientUnits = ingredients.map((item) => {
              return item['unit'];
            })

            const ingredientValues = ingredients.map((item) => {
              return item['value'];
            })

            dbWrite(recipeSummary, ingredientItems, ingredientUnits, ingredientValues, processItems2, imageFilesPath);
          }
        });
        }
      );  
    });
  }



  // 1. 요리명, 요리시간/난이도  ------------------------------------------------------------
  const [recipeSummary, setRecipeSummary] = useState({ title: '', subtitle: '', hashtags: [] , meals: '', division: '', time: '', difficulty: '' });

  // 요리명 변경 -------------------------------------------------------------
  function handleChangeRecipeTitle(e) {    
    const recipeSummaryCopy = JSON.parse(JSON.stringify(recipeSummary));
    recipeSummaryCopy.title = e.target.value;  
    setRecipeSummary(recipeSummaryCopy);		            
  }

  // 간단한 요리 설명 변경 -------------------------------------------------------------
  function handleChangeRecipeSubTitle(e) {    
    const recipeSummaryCopy = JSON.parse(JSON.stringify(recipeSummary));
    recipeSummaryCopy.subtitle = e.target.value;  
    setRecipeSummary(recipeSummaryCopy);		            
  }

  // hashtags 변경 -------------------------------------------------------------
  function handleChangeHashtags(e) {    
    const recipeSummaryCopy = JSON.parse(JSON.stringify(recipeSummary));
    recipeSummaryCopy.hashtags = (e.target.value).split(',');  
    setRecipeSummary(recipeSummaryCopy);		            
  }

  // 요리양(인분)변경 -------------------------------------------------------------
  function handleChangeMeals(e) {    
    const recipeSummaryCopy = JSON.parse(JSON.stringify(recipeSummary));
    recipeSummaryCopy.meals = e.target.value;  
    setRecipeSummary(recipeSummaryCopy);		            
  }

  // 요리분류(한식/중식/일식/양식/분식/야식)변경 -----------------------------------------
  function handleChangeDivision(e) {    
    const recipeSummaryCopy = JSON.parse(JSON.stringify(recipeSummary));
    recipeSummaryCopy.division = e.target.value;  
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
  const [ingredients, setIngredients] = useState([{ id: 0, ingredient: '', unit: '', value: '' },]);

  function addIngredients() {
    const input = {			                   
      id: nextID2.current,		               
      ingredient: '',
      unit: '',
      value: ''			                     
    };

    setIngredients([...ingredients, input]); 
    
    nextID2.current += 1; 		               
  }

  function deleteIngredients(index) {                                    
    if (nextID2.current > 1) {
      setIngredients(ingredients.filter(item => item.id !== index)); 

      nextID2.current -= 1;
    } 
  }

  function handleChangeIngredients(e, index) {
  if (index > ingredients.length) return;  
  
  const ingredientsCopy = JSON.parse(JSON.stringify(ingredients));
  ingredientsCopy[index].ingredient = e.target.value;  
  setIngredients(ingredientsCopy);		  
  }

  function handleChangeIngredientUnit(e, index) {
    if (index > ingredients.length) return; 

  const ingredientsCopy = JSON.parse(JSON.stringify(ingredients));
  ingredientsCopy[index].unit = e.target.value;  
  setIngredients(ingredientsCopy);		  
  }

  function handleChangeIngredientValue(e, index) {
    if (index > ingredients.length) return; 

  const ingredientsCopy = JSON.parse(JSON.stringify(ingredients));
  ingredientsCopy[index].value = e.target.value;  
  setIngredients(ingredientsCopy);		  
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
          <Nav.Link type='button' className='button' as={Link} to="/" >X</Nav.Link>
        </div>
        

        <div className='addRecipeBody'>
          <span>사진첨부</span>
          <span style={{color: 'red' }}>*</span>
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

          <span>간단한 요리 설명</span>
          <span style={{color: 'red'}}>*</span>
          <div>
            <input type="text" className='recipeTitle' onChange={e => handleChangeRecipeSubTitle(e)}></input>
          </div>

          <span>해시태그</span>
          <span style={{color: 'red'}}>*</span>
          <div>
            <input type="text" className='recipeTitle' placeholder=' , 로 구분 해시태그 입력 ...'
                onChange={e => handleChangeHashtags(e)}></input>
          </div>
    <div className='textcenter'>
          <span>요리양 (인분) / 요리분류 (한식/중식/일식/양식/분식/야식)</span>
          <span style={{color: 'red'}}>*</span>
    </div>
          <div className='textcenter'>
            <input type="text" className='timeRecipe' onChange={e => handleChangeMeals(e)}></input>
            <span style={{color: 'black', fontWeight: 400, display:'flex', alignItems:'center'}}>/ </span>
            <input type="text" className='timeRecipe' onChange={e => handleChangeDivision(e)}></input>

          </div>
<div className='textcenter'>
          <span>요리시간(분) / 난이도</span>
          <span style={{color: 'red'}}>*</span>

</div>
          <div className='textcenter'>
            <input type="text" className='timeRecipe' onChange={e => handleChangeTimeDifficulty(e)}></input>
            <span style={{color: 'black', fontWeight: 400, display:'flex', alignItems:'center' }}>분 / </span>
            <input type="text" className='timeRecipe' value={recipeSummary.difficulty || '난이도'}></input>
          </div>

          <div style={{ marginBottom: 10}} >
            <span>재료</span>
            <span style={{color: 'red'}}>*</span>
          </div>

          {ingredients.map((item, index) => {
            return (
            <div className='materialBox'>
              <input type="text" className='materialRecipe' style={{marginTop: "10"}}
                onChange={e => handleChangeIngredients(e, index)}
                value={item.title}
              ></input>
              <select onChange={e => handleChangeIngredientUnit(e, index) }>
                <option value="단위">단위</option>
                <option value="개">개</option>
                <option value="공기">공기</option>                
                <option value="포기">포기</option>                
                <option value="컵">컵</option>
                <option value="큰 스푼">큰 스푼</option>
                <option value="작은 스푼">작은 스푼</option>
                <option value="장">장</option>
                <option value="꼬집">꼬집</option>
                <option value="g">g</option>
              </select>
              <input type="text" className='unitRecipe'
                onChange={e => handleChangeIngredientValue(e, index)}
                value={item.value}
              ></input>

              { index === 0 && 
                <>
                <button className='plusMinus' onClick={addIngredients}>+</button>
                <button className='plusMinus' onClick={() => deleteIngredients(nextID2.current-1)}>-</button>
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
          <button className='submitButton' >CANCLE</button>
          <button className='submitButton' onClick={handleClickSubmit}>SUBMIT</button>
        </div>

      </div>
    </>
  );
}

export default Addrecipe;