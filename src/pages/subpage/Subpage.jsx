import React from 'react';





function Subpage(props) {

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
                <h1>레시피종류</h1>
                </div>
                <div className='value'>                    
                <div className='korean'>
                    #한식
                <img src={ require('./images/korean.jpeg') } />
                    </div>
                <div className='snack'>
                    #분식
                <img src={ require('./images/snack.jpg') } />
                    </div>
                <div className='china'>
                    #중식
                <img src={ require('./images/china.jpg') } />
                    </div>
                <div className='japan'>
                    #일식
                <img src={ require('./images/japan.jpg') } />
                    </div>
                <div className='pasta'>
                    #양식
                <img src={ require('./images/pasta.png') } />
                    </div>
                </div>
            </div> 
        </div>
        </>
        
    );
}

export default Subpage;
