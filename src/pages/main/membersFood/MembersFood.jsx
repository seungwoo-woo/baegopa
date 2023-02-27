import React, { Fragment } from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import Card from '../../../components/Card';
import CardList from '../../../components/CardList';
import styles from './MembersFood.module.css'



const viewIndex = 'comment';

function MembersFood(props) {

  // const {viewIndex, groupTitme, cookItemList} = props;
  
  return (
    <Fragment>
    <div>
    <h1 className={styles.hd}> <GiCampCookingPot/>회원들 요리</h1>
    </div>
    <div className={styles.header}>
      <CardList viewIndex={viewIndex} groupTitme={groupTitme} cookItemList={cookItemList}/>
    </div>
    </Fragment>
  );
}

export default MembersFood;