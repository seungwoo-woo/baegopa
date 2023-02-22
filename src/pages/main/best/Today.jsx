import React, { Fragment } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import styled from "styled-components";
const MainStyled = styled.div`
  width: 1200px;
  height: 530;
  display: flex;
`

const Todaylist = styled.div`
width: 220px;
height: 530px;
margin-right: 30px;
border-radius: 20px;
display: block;
justify-content: center;
align-items: center;
background-color: #1f87e3;
text-align: center;
`

const StyledImage = styled.img`
width: 950px;
height: 530px;
border-radius: 20px;
font-size: 50px;
`
const StyledIcon = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`

const recipes = [
  {
    // 요리명, 이미지, 재료, 설명, 방법, 난이도, 양, 조리시간, 해시태그
    id: 1,
    title: "김치찌개",
    image: "http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00275_1.png",
    ingredients: "재료 바지락(100g), 주꾸미(100g), 김치(150g), 무(50g), 마늘(10g) 대파(10g), 양파(40g), 두부(50g), 참기름(5g), 배즙(50g), 팽이버섯(10g) 육수 다시마(5g), 멸치(10g), 물(300g)",
    subtitle: `간단하게 만들어 보는 김치 톡톡톡 김치찌개♥
  다 먹고 한 방울까지 싹싹 밥이랑 비벼먹는게 최고죠~
  색깔도 너무 이쁘고 한 그릇만 있으면 반찬도 필요없는 김치찌개`,
    manual01: "1. 냄비에 육수 재료를 넣고 끓이다가 물이 끓어오르면 다시마를 건지고 조금 더 끓여 육수를 우려낸다.",
    manual02: "2. 바지락은 해감하고, 주꾸미는 내장과 입, 눈을 제거하고 4cm 크기로 잘라 준비한다.",
    manual03: "3. 김치는 국물을 꽉 짜서 한입 크기로 썰고, 무는 편 썰고, 마늘은 다지고, 대파는 어슷 썰고, 양파는 굵게 채 썰고, 두부는 납작하게 썬다.",
    manual04: "4. 냄비에 참기름을 두르고, 양파와 김치가 투명해질 때까지 볶다가 육수를 붓고 바지락을 넣어 끓으면 주꾸미를 넣어 더 끓인다.",
    manual05: "5. 김칫국물과 배즙을 2:1로 섞은 뒤 찌개에 넣어 간을 맞춘다.",
    manual06: "6. 두부, 팽이버섯을 넣고 한소끔 끓여 마무리한다.",
  },
]

function Today(props) {
  return (
    <>
      <Fragment>
        <h1><AiOutlineLike />오늘의 요리</h1>
      </Fragment>
      <MainStyled>
        <Todaylist>
          <h1 style={{ marginTop: 20, marginBottom: 100, }}>{recipes[0].title}</h1>
          <p style={{ marginTop: 20, marginBottom: 180, fontSize: 20}} >{recipes[0].subtitle}</p>
          <StyledIcon>
            <span>❤ 3000</span>
            <span>👁‍🗨 200</span>
          </StyledIcon>
        </Todaylist>
        <div>
          <StyledImage src={recipes[0].image} />
        </div>
      </MainStyled>

    </>

  );
}

export default Today;