import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from "../css/recipeDetail.module.css";
import { v4 as uuidv4 } from 'uuid';
import axios,{ post } from 'axios';

import Card from '../../../components/Card';

// 참고 사이트 : https://cookinghoil.tistory.com/114


function ReviewRegiter(props) {

  const [cookItemList, setCookItemList] = useState([
    {
      id: 1,
      title: "애호박구이 간장조림",
      cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
      userId: "샬라라",
      viewNo: 137479,
      likeNo: 3657,
      userComment: [
        {
        commentUserId: "삐리리",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        }
      ]
    },
    {
      id: 2,
      title: "애호박구이 간장조림",
      cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
      userId: "샬라라",
      viewNo: 137479,
      likeNo: 3657,
      userComment: [
        {
        commentUserId: "삐리리",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        }
      ]
    },
  ]);
  
  const [value, setValue] = useState('');
  const imgRef = useRef(null);
  const viewIndex = 'comment';
  const [imgFile, setImgFile] = useState(null);
  const [content, setContent] = useState('');

  // --------------------------------------------------
  // const hadleChange = (e) => {
  //   setValue(e.target.value);
  // }
  
  const handleInsert = useCallback((text, cardImagePath, base64Sub) => {  //handleInsert로 호출될 때 
    const cookItem = {
      id: uuidv4(),
      title: "",
      cardImagePath: base64Sub,
      userId: "",
      viewNo: "",
      likeNo: "",
      userComment: [{
        commentUserId: "",
        comment: "",
      }]
    };
    setCookItemList(cookItemList.concat(cookItem));  // TODO: 새로운 배열을 반환함 그거를 setTodos함수에 넣음
    // nextId.current += 1; // nextId에 1씩 더하기
    console.log(cardImagePath);
  }, [cookItemList]);

  const handleSubmit = (e) => {
    // console.log(imgRef.current.files[0].name);   // TODO: 댓글 이미지 데이터
    console.log(content);    // TODO : 댓글 text 데이터
    imgRef.current = null;
    setImgFile('');
    setContent('');
    e.preventDefault();
  };
  // ----------------------------------------------------------
  const handleChangeFile = (event) => {
    console.log(event.target.files.length)    // TODO: 이미지 이름 데이터!!!!
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

  console.log(imgRef.current);

  return (
    <>
      <div style={{ display: 'flex', columnGap: 20 }}>
        {cookItemList.map((cookItem) => {
          return <Card key={cookItem.id} cookItem={cookItem} viewIndex={viewIndex} />
        })}
      </div>  
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