import React from 'react';
import BestSlider from './best/BestSlider';
import Footer from './mainfull/Footer';
import Header from './mainfull/Header';
import Today from './best/Today';
import Best from './best/Best';
import MembersFood from './membersFood/MembersFood';
import MainButton from './button/MainButton';
function Main(props) {
  return (
    <>
    <Header/>
    <Today/>
    <Best/>
    <BestSlider/>
    {/* <LatestView/> */}
    <MembersFood/>
    <MainButton/> 
    <Footer/>
    </>
  );
}

export default Main;