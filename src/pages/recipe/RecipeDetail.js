import axios from 'axios';
import React, { useState } from 'react';

function RecipeDetail(props) {
// API 주소 : `http://openapi.foodsafetykorea.go.kr/api/${authKey}/COOKRCP01/json/1/200`

const [data, setData] = useState();

const authKey = '99089c9cdffc4862b970'
const handleRequest = async () => {
  try {
    const response = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${authKey}/COOKRCP01/json/1/200`);
    // console.log(response.data.COOKRCP01.row);
    const lecipeSample = (response.data.COOKRCP01.row);
    // setData(response.data);
    setData(lecipeSample); 
  } catch (error) {
    console.error(error);
  }
}

// console.log(data);
// console.log(data[0]);
// const recipeOne = data[0];

// const recipeMainImg = recipeOne.ATT_FILE_NO_MAIN;  // 레시피 결과 이미지
// const recipeMainStory = recipeOne.ATT_FILE_NO_MAIN;  // 레시피에 대한 간단한 설명
// const recipeMainTitle = recipeOne.ATT_FILE_NO_MAIN;  // 레시피 제목
// const recipeMainTime = recipeOne.ATT_FILE_NO_MAIN;  // 조리 시간
// const recipeMainHard = recipeOne.ATT_FILE_NO_MAIN;  // 레시피 난이도 - 조리시간에 따른 상/중/하 결정
// console.log(recipeMainImg);


  return (
    <>
      {/* <div style={{ width: 600, height:400 }}>
        <img src={recipeMainImg} alt='recipeMainImage' />
      </div> */}
      <div>
        <button type='button' onClick={() => handleRequest(1)}>불러오기</button>
      </div>
      {data && 
        <>
          <textarea cols={70} rows={8} value={JSON.stringify(data, null, 2)} readOnly />
          <p>{data.title}</p>
          <img src={data.thumbnailUrl} alt="thumbnail" />
        </>
      }
    </>
  );
}

export default RecipeDetail;