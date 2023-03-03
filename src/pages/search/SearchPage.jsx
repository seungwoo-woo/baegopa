import React, { useState } from 'react';
import Card from '../../components/Card';
import CardList from '../../components/CardList';
import styles from "./Search.module.css";



    // 또는 배열의 filter() 함수 사용
    // const filteredPosts = posts.filter((value, idx) => {
    //   return index !== idx;
    // });
    // setPosts(filteredPosts);
    
// todos 배열에서 id로 항목을 지우기 위한 handleRemove() 함수 정의
  // 불변성을 지키면서 배열의 요소를 제거해야할 때 filter() 활용
//   const handleRemove = useCallback((id) => {
//     // 방법2 - 배열의 내장 함수 이용
//     // filter('테스트 함수'): 기존의 배열은 변경하지 않고 특정 조건을 만족하는 요소들만 따로 추출하여 새로운 배열을 만듦
//     // 테스트 함수에서는 true 또는 false를 반환해야 하며, 여기서 true를 반환하는 경우만 새로운 배열에 포함됨
//     setCardList(CardList.filter((card) => card.id !== id));
//   }, [CardList]);

function SearchPage(props) {

const cookItemList = [ 
    {id: 1,
    title: "김현정",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "현정",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    {id: 2,
    title: "필터",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "이회은",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    {id: 3,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "닉네임",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    {id: 4,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "닉네임",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    {id: 5,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "닉네임",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    {id: 6,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "닉네임",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    {id: 7,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "닉네임",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    {id: 8,
    title: "애호박구이 간장조림",
    cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
    userId: "샬라라",
    viewNo: 137479,
    likeNo: 3657,
    userComment: [
        {
        commentUserId: "닉네임",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
    ]},
    ];
    const [textValue, setTextValue] = useState('');
    console.log(textValue);
    const contentChange = (e) => {
        setTextValue(e.target.value);
    }
    const searchRecipes = cookItemList.filter((cookItem) => {
        return cookItem.title == textValue;
    })
    const viewIndex = 'comment';

    return (
        <>
        <div className={styles.wrapper}>

            {/* 메뉴 */}
            <div className={styles.menu}>
                <nav>NAV영역</nav>
            </div>
            <div className={styles.menu2}>
                <ul>
                    <li>하위메뉴1</li>
                    <li>하위메뉴2</li>
                    <li>하위메뉴3</li>
                    <li>하위메뉴4</li>
                </ul>
            </div>

            {/* 분류 */}
            <div className={styles.title}>
                <div>
                <h1>레시피 검색</h1>
                </div>
                <div className={styles.search}>                    
                <div className={styles.content}>
                    <input type={'text'} placeholder={'검색 키워드 입력란'} value={textValue} onChange={contentChange}/>
                    <img src={ require('../subpage/images/tabler_search.png') } alt={'검색'} title={'검색'}/> 
                    </div>
                </div>
                {textValue}
                <CardList />
                {searchRecipes.map((searchRecipe) => {
                    return <Card key={searchRecipe.id} cookItem={searchRecipe} viewIndex={viewIndex} />
                })}
            </div> 
        </div>
        </>
        
    );
}

export default SearchPage;
