import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { GiBowlOfRice } from 'react-icons/gi';
import styles from './Footer.module.css'
function Footer(props) {
  return (
    <>
      <div className={styles.ft}>
        <h5>회사소개</h5>
        <h5>광고문의</h5>
        <h5>개인정보처리방침</h5>
        <h5>이용약관</h5>
        <h5>고객센터</h5>
      </div>
    

      <div>
        <div className={styles.ff}>
          <div className={styles.info}>
            <p>상호명:(주)배고파</p>
            <p>대표자:배고픈사람들</p>
            <p>사업자등록번호:012-345-6789</p>
            <p>고객센터:012-345-6789</p>
            <p>주소:서울특별시 강남구 신사동 513-3</p>
            <p>이메일:BAEGOPA@gmail.com</p>
          </div>
          <div className={styles.sns}>
            <div className={styles.header}>
              <h1><GiBowlOfRice className={styles.ri} /></h1>
              <h1>배고파</h1>
            </div>
            <div className={styles.snss}>
              <h1 style={{
                color:'rgb(175, 21, 175)',
              }}><AiFillInstagram /></h1>
              <h1 style={{
                color:'red',
              }}><AiFillYoutube /></h1>
              <h1
              style={{
                color:'blue',
              }}><AiFillFacebook /></h1>
            </div>
          </div>
        </div>
        <div className={styles.cp}>
          <p>@Copyright 2020. cocoder. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;