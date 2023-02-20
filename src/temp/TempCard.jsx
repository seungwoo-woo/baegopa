import React from 'react';
import '../App.css';

function TempCard(props) {
  const {lecipe} = props;
  const title = lecipe.RCP_NM;
  const material = lecipe.RCP_PARTS_DTLS;
  console.log(material);
  // const material = tempMaterial.split(',');
  
  const mainImgPath = lecipe.ATT_FILE_NO_MK;
  const subImgPath1 = lecipe.MANUAL_IMG01;
  const subImgPath2 = lecipe.MANUAL_IMG02;
  const subImgPath3 = lecipe.MANUAL_IMG03;
  const subImgPath4 = lecipe.MANUAL_IMG04;
  const subImgPath5 = lecipe.MANUAL_IMG05;

  const p1 = lecipe.MANUAL01;
  const p2 = lecipe.MANUAL02;
  const p3 = lecipe.MANUAL03;
  const p4 = lecipe.MANUAL04;
  const p5 = lecipe.MANUAL05;
  const p6 = lecipe.MANUAL06;
  const p7 = lecipe.MANUAL07;
  const p8 = lecipe.MANUAL08;
  const p9 = lecipe.MANUAL09;
  const p10 = lecipe.MANUAL10;

   

  return (
    <div className='lecipeCard'>
      <h1>{title}</h1>

      <p>{material}</p>

      <div className='lecipeCardImg'>
        <img src={mainImgPath} width={300} ></img>
        <img src={subImgPath1} width={200} height={200}></img>
        <img src={subImgPath2} width={200} height={200}></img>
        <img src={subImgPath3} width={200} height={200}></img>
        <img src={subImgPath4} width={200} height={200}></img>
        <img src={subImgPath5} width={200} height={200}></img>

      </div>
      <h3>{p1}</h3>
      <h3>{p2}</h3>
      <h3>{p3}</h3>
      <h3>{p4}</h3>
      <h3>{p5}</h3>
      <h3>{p6}</h3>
      <h3>{p7}</h3>
      <h3>{p8}</h3>
      <h3>{p9}</h3>
      <h3>{p10}</h3>
    </div>
  );
}

export default TempCard;