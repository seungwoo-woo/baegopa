import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempWriteDB from './TempWriteDB';

// import './App.css';


function parseStr(dataSet) {
  const XMLParser = require('react-xml-parser');
  const dataArr = new XMLParser().parseFromString(dataSet).children;
  console.log(dataArr);
  return dataArr;
}


function LecipeAPI2(props) {
  
  const [data, setData] = useState();

  const authKey = '99089c9cdffc4862b970'

  const handleRequest = async () => {
    try {
      const response = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${authKey}/COOKRCP01/json/1/200`);
      // const lecipeSample = await parseStr(response.data);
      console.log(response.data.COOKRCP01.row);
      const lecipeSample = (response.data.COOKRCP01.row);

      // lecipeSample.splice(0, 2);
      // console.log(lecipeSample);

      setData(lecipeSample);


    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div >
      <button type='button' onClick={() => { handleRequest()}}>불러오기</button>
      <div className="lecipeMain">
      { data && 
        data.map((lecipe, index) => {

          return <TempWriteDB key={index} lecipe={lecipe} />          
          // return <TempCard key={index} lecipe={lecipe} />

        })
      }
      </div>
    </div>
  );
}

export default LecipeAPI2;