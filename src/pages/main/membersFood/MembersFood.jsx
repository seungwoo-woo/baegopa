import React, { Fragment } from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import CardList from '../../../components/CardList';
import styles from './MembersFood.module.css'
function MembersFood(props) {

  
  return (
    <Fragment>
    <div>
    <h1 className={styles.hd}> <GiCampCookingPot/>회원들 요리</h1>
    </div>
    <div className={styles.header}>
    <CardList viewIndex="comment" />
    </div>
    </Fragment>
  );
}

export default MembersFood;