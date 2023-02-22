import React, { Fragment } from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import styled from "styled-components";
import styles from './MembersFood.module.css'
import Card from '../../../components/CardList';
import CardList from '../../../components/CardList';

function MembersFood(props) {

  
  return (
    <Fragment>
    <div>
    <h1> <GiCampCookingPot/>회원들 요리</h1>
    </div>
    <div className={styles.header}>
    <CardList viewIndex="comment" />
    </div>
    </Fragment>
  );
}

export default MembersFood;