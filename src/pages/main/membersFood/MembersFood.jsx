import React, { Fragment } from 'react';
import { GiCampCookingPot } from "react-icons/gi";
import Card from '../../../components/Card';
import CardList from '../../../components/CardList';
import styles from './MembersFood.module.css'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';



const viewIndex = 'comment';

function MembersFood(props) {

  // const {viewIndex, groupTitme, cookItemList} = props;
  
  return (
    <Fragment>
    <div>
    <Nav.Link className={styles.hd} as={Link}  to="/search">Members Food</Nav.Link>
    </div>
    
    <div className={styles.header}>
    </div>
    </Fragment> 
  );
}

export default MembersFood;