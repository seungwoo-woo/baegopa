import React, { useCallback, useRef, useState } from 'react';
import styles from "../css/recipeDetail.module.css";



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
  ]);
  
  const [value, setValue] = useState('');

  const hadleChange = (e) => {
    setValue(e.target.value);
  }
  const handleInsert = useCallback((text) => {  //handleInsert로 호출될 때 
    const cookItem = {
      id: "",
      title: "",
      cardImagePath: "",
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
  }, [cookItemList]);
  const handleSubmit = (e) => {
    handleInsert(value);
    setValue('');
    e.preventDefault();
  };

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef(null);
  // console.log(imgRef.current);
  // console.log(imgRef);

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    console.log(file.name);
    const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          setImgFile(reader.result);
      };
  };

  // const [reviewValue, setReviewValue] = React.useState({
  //   id: "",
  //   title: "",
  //   cardImagePath: "",
  //   userId: "",
  //   viewNo: "",
  //   likeNo: "",
  //   userComment: [{
  //     commentUserId: "",
  //     comment: "",
  //   }]
  // });

  console.log(cookItemList);

  return (
    <>
      <div 
        // className={styles['review--register']}
        // onSubmit={handleSubmit}
      >
        <label 
          className={styles['input-file-button']} 
          for="input-file"
        >
          <input
            type="file" 
            id="input-file" 
            accept="image/*"
            value={value}
            onChange={saveImgFile}
            // ref
            style={{display:"none"}} 
            name="ss"
          />
        </label>
        <label 
          htmlFor="review--content" 
          // className={styles['review--register--write']}
        >
          <textarea
            // value={reviewValue.userComment}
            onChange={hadleChange}
            id='review--content'
            name="ssdd"
            cols="50" rows="6"
            placeholder='가장 좋아하는 것에 대한 에세이를 장석하세요'
          />
        </label>
        <button
          type="submit" 
          onClick
          onSubmit={handleSubmit} 
          // className={styles['review--register--submit']}
        >SUBMIT</button>
      </div>
    </>
  );
}

export default ReviewRegiter;