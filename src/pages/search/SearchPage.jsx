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
            <div className='recipe'>
                <div>
                <h1>뫄뫄의 검색 결과</h1>
                </div>
                <div className='value'>                    
                {/* <div className='korean'>
                    #한식
                    </div>
                <div className='snack'>
                    #분식
                    </div>
                <div className='china'>
                    #중식
                    </div>
                <div className='japan'>
                    #일식
                    </div>
                <div className='pasta'>
                    #양식
                    </div> */}
                </div>
            </div> 
        </div>
        </>
        
    );
}

export default SearchPage;
