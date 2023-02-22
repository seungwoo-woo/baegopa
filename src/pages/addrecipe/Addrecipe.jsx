import React from 'react';
import './Addrecipe.css';

function Addrecipe(props) {
  return (
    <>
      <div className='addRecipeWrapper'> 
        <div className='header'>
          <h1>레시피 등록하기</h1>
          <button>X</button>
        </div>

        <div className='addRecipeBody'>
          <span>사진첨부</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="text"></input>
            <button>사진첨부</button>
          </div>

          <span>요리명</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="text"></input>
          </div>

          <span>요리시간/난이도</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="text" className='timeRecipe'></input>
            <span>분 / </span>
            <input type="text" className='timeRecipe' value={"난이도"}></input>
          </div>

          <span>재료</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="text" className='materialRecipe'></input>
            <select>
              <option value="0">단위</option>
              <option value="컵">컵</option>
              <option value="스푼">스푼</option>
            </select>
            <input type="text" className='unitRecipe'></input>
            <button className='plusMinus'>+</button>
            <button className='plusMinus'>-</button>
          </div>

          <span>조리방법</span>
          <sapn style={{color: 'red'}}>*</sapn>
          <div>
            <input type="text"></input>
            <button className='plusMinus'>+</button>
            <button className='plusMinus'>-</button>
          </div>    
          
        </div>

        <div className='addRecipeFooter'> 
          <button>CANCLE</button>
          <button className='submitButton'>SUBMIT</button>
        </div>

      </div>
    </>
  );
}

export default Addrecipe;