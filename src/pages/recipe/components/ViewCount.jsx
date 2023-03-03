import React from 'react';
import styles from "../css/recipeDetail.module.css";

function ViewCount(props) {
  const { infos, setrecipeInfos } = props;

  return (
    <div className={styles.viewcount}>
      <img src={ require('../images/viewcount.png') } />
      <span>{infos[0].viewCount}</span>
    </div>
  );
}

export default ViewCount;