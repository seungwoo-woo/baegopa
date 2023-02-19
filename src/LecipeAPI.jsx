import './App.css';
import Button from 'react-bootstrap/Button';
import axios from "axios";
// import { XMLParser } from "react-xml-parser";
import TempCard from './temp/TempCard';
import { useState } from 'react';




function parseStr(dataSet) {
  const XMLParser = require('react-xml-parser');
  const dataArr = new XMLParser().parseFromString(dataSet).children;
  return dataArr;
}

async function handleAxios() {
  const response = await axios.get('http://openapi.foodsafetykorea.go.kr/api/sample/COOKRCP01/xml/1/5')
  const lecipeSample = parseStr(response.data);
  lecipeSample.splice(0, 2);
  console.log(lecipeSample);

  lecipeSample.map((data, index) => (
          
    <TempCard key={index} title={data.children[0].value} />)) 


  return lecipeSample;
}


function LecipeAPI() {

  let lecipeTitle = [];
  
  return (
    <div>
      <button onClick={ async () => {
        lecipeTitle = await handleAxios();
        console.log(lecipeTitle);
        lecipeTitle.map((data, index) => (
          
          <TempCard key={index} title={data.children[0].value} />) 
        )
        }}>가져오기
      </button>


      

    </div>
  );
}

export default LecipeAPI;
