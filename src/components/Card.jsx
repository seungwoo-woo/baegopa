import React from 'react';
import Addrecipe from '../pages/addrecipe/Addrecipe';
import MovePage from '../pages/login/MovePage';
import RecipeDetail from '../pages/recipe/RecipeDetail';
import styles from './Card.module.css';

import { Link, useNavigate } from 'react-router-dom';

// import likeIconImage from "../img/ph_heart.png";

function Card(props) {

  // - 받아오는 값 ---------------------------
  // const cookItem = {
  //   id: 1,
  //   title: "애호박구이 간장조림",
  //   cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
  //   userId: "샬라라",
  //   viewNo: 137479,
  //   likeNo: 3657,
  //   userComment: [
  //     {
  //     commentUserId: "삐리리",
  //     comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
  //     } 
  //   ],
  // };

  // const viewIndex = "view";
  // -----------------------------------------

  const {recipe, viewIndex} = props;

  const navigate = useNavigate(); 

  // console.log(recipe);

  let view = true;
  let comment = false;
  
  if (viewIndex === 'view') {
    view = true;
    comment = false;
  } else if (viewIndex === 'comment') {
    view = false;
    comment = true;
  }  

  const handleRecipeClick = () => {
    navigate('/recipe/'+ recipe.docId);
  }

  return (
    <>
    <div>

    <div className={styles.card}>
      
      <img className={styles.cardimg} src={recipe.imageFilesPath[0]} width={285} height={285}
        onClick={handleRecipeClick}
      />

      <div className={styles.bottomTextBox} >
        <div className={styles.noBox}>
          <div className={styles.likeNoBox}>
            <p>{recipe.likeCount}</p>
            <img src={require ('../img/ph_heart.png')} width={35}/>
          </div>
        </div> 
      </div>
      {/* { view &&  */}
      
    </div>

    { comment &&
    <div className={styles.commentBox}>

      {/* <div className={styles.thumbnailBox}> */}
        {/* <div className={styles.thumbnailImage}> 
          <img scr={require ('../img/bi_person-fill.png')}/>
          <i className="fa-solid fa-user"></i>
        </div> */}
        {/* <p>{cookItem.userComment[0].commentUserId}</p> */}
      {/* </div> */}

      <div className={styles.userComment}>
        {/* <p>{recipe.userComment[0].comment}</p> */}
      </div>

    </div>
    }

    </div>
    </>
  );
}

export default Card;