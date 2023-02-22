import React from 'react';
import CardList from '../../components/CardList';
import './SubCss.css';



// w 1200



function Subpage(props) {
    return (
        <div>
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
            <div>
                <h1>레시피종류</h1>    
            </div> 

            <div>
                <CardList/>    
            </div>
        </div>
        
    );
}

export default Subpage;