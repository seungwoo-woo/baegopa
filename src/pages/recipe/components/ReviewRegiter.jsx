import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from "../css/recipeDetail.module.css";
import { v4 as uuidv4 } from 'uuid';
import axios,{ post } from 'axios';

import Card from '../../../components/Card';

// 참고 사이트 : https://cookinghoil.tistory.com/114


function ReviewRegiter(props) {
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

  const handleSubmit = (e) => {
    // console.log(imgRef.current.files[0].name);   // TODO: 댓글 이미지 데이터
    console.log(content);    // TODO : 댓글 text 데이터
    imgRef.current = null;
    setImgFile('');
    setContent('');
    // setUpload('');
    e.preventDefault();
    handleInsert('');
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