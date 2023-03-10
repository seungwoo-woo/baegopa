import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from "../css/recipeDetail.module.css";
import { v4 as uuidv4 } from 'uuid';
import axios,{ post } from 'axios';

import { firebaseConfig } from '../../addrecipe/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import Card from '../../../components/Card';

// 참고 사이트 : https://cookinghoil.tistory.com/114


function ReviewRegiter(props) {
  const [ reloadComment, setReloadComment ] = useState();
  const { docId, setRecipeItem } = props;
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const reviewRef = doc(db, "RecipeDB", docId)


  const {cookItemList, setCookItemList} = props;

  
  const [value, setValue] = useState('');
  const imgRef = useRef(null);
  const viewIndex = 'comment';
  const [imgFile, setImgFile] = useState(null);
  const [content, setContent] = useState('');
  // const [upload, setUpload] = React.useState({
  //   cardImagePath: imgFile,
  //   userComment: [{
  //     commentUserId: "어우동",
  //     comment: content,
  //   }]
  // });

      // -------------------사용자 계정 인식---------------------
      // const [ signinUser, setSigninUser ] = useState('1');

      // const auth = getAuth();
    
      // onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     setSigninUser(user.email);
      //   } else {
      //     setSigninUser(user);
      //   }
      // }); 
  
      // ------------------------------------------------------------
  
  const handleInsert = useCallback((data) => {  //handleInsert로 호출될 때 
    const {cardImagePath, commentUserId, comment} = data;
    
    const cookItem = {
      id: uuidv4(),
      title: "",
      cardImagePath,
      userId: "",
      viewNo: "",
      likeNo: "",
      userComment: [{
        commentUserId,
        comment,
      }]
    };
    setCookItemList(cookItemList.concat(cookItem));
    console.log(cardImagePath);
  }, [cookItemList]);

  const handleSubmit = async (e) => {
    console.log(imgRef.current.files[0].name);   // TODO: 댓글 이미지 데이터
    console.log(content);    // TODO : 댓글 text 데이터

    const querySelectSnapshot = await getDoc(doc(db, "RecipeDB", docId)); 
    const recipeItemCall = querySelectSnapshot.data();

    await updateDoc(reviewRef, {
      userComment: arrayUnion({
        imgPath : "https://static.wtable.co.kr/image/production/service/recipe/2176/27e786f0-1eed-49d7-9012-4a1efb6bf7b8.jpg?size=500x500",
        commentUserId: 'aicha1202@naver.com',
        comment: content
      })
    });

    // API에서 DB를 정보를 불러와서
    // setRecipeItem() 함수에 담아서 보내주어 렌더링이 일어나게 한다
    setRecipeItem(recipeItemCall);
    imgRef.current = null;
    setImgFile('');
    setContent('');
    // setUpload('');
    e.preventDefault();
    // handleInsert('');
  };
  // ----------------------------------------------------------
  const handleChangeFile = (event) => {
    console.log(event.target.files.length)
    setValue(event.target.files);
    
    if (event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
      };
    }
  }
  // ---------------------------------------------------------
  const contentChange = (e) => {
    setContent(e.target.value);
  }
  // console.log(cookItemList);
  return (
    <>
      <div
        className={styles['review--register']}
        // onSubmit={handleSubmit}
      >
        {imgFile
          ? <img className={styles['review--register-image']} src={imgFile} alt="프로필 이미지"/>
          : <label className={styles['input-file-button']} htmlFor="file"></label>
        }
        <input
          type="file" 
          id="file"
          ref={imgRef}
          required
          accept='image/*'
          onChange={handleChangeFile}
          style={{display:"none"}} 
        />
        <label 
          htmlFor="review--content" 
          className={styles['review--register--write']}
        >
          <textarea
            value={content}
            onChange={contentChange}
            id='review--content'
            resize= "none"
            name="ssdd"
            cols="50" rows="6"
            placeholder='가장 좋아하는 것에 대한 에세이를 장석하세요'
          />
        </label>
        <button
          type="submit" 
          onClick={handleSubmit}
          className={styles['review--register--submit']}
        >SUBMIT</button>
      </div>
    </>
  );
}

export default ReviewRegiter;