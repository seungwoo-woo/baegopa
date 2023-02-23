import React from 'react';
import CardList from '../../components/CardList';
import './SubCss.css';








function Subpage(props) {

    return (
        <div className='wrapper'>
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
            <div className='recipe'>
                <h1>레시피종류</h1>
                <div className='value'>                    
                <div className='korean'>#한식</div>
                <div className='snack'>#분식</div>
                <div className='china'>#중식</div>
                <div className='japan'>#일식</div>
                <div className='pasta'>#양식</div>
                </div>
            </div> 

            <div>
                <CardList/>    
            </div>
        </div>
        
    );
}

export default Subpage;