import React from 'react';





function SearchPage(props) {

    return (
        <>
        <div className='wrapper'>

            {/* 메뉴 */}
            <div className='menu'>
                <nav>NAV영역</nav>
            </div>
            <div className='menu2'>
                <ul>
                    <li>하위메뉴1</li>
                    <li>하위메뉴2</li>
                    <li>하위메뉴3</li>
                    <li>하위메뉴4</li>
                </ul>
            </div>

            {/* 분류 */}
            <div className='title'>
                <div>
                <h1>레시피 검색</h1>
                </div>
                <div className='search'>                    
                <div className='content'>
                    <input type={'text'} placeholder={'검색 키워드 입력란'}/>
                    <img src={ require('../subpage/images/tabler_search.png') } alt={'검색'} title={'검색'}/> 
                    </div>
                </div>
            </div> 
        </div>
        </>
        
    );
}

export default SearchPage;
