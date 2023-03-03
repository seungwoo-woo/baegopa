import React from 'react';
import styles from "./Sub.module.css";





function Subpage(props) {

    return (
        <>
        <div className={styles.wrapper}>

            {/* 분류 */}
            <div className={styles.recipe}>
                <div>
                <h1>오늘의 레시피</h1>
                </div>
                <div className={styles.value}>                    
                <div>
                    #한식
                    </div>
                <div>
                    #분식
                    </div>
                    <div>
                    #야식
                    </div>
                <div>
                    #중식
                    </div>
                <div>
                    #일식
                    </div>
                <div>
                    #양식
                    </div>
                </div>
            </div> 
        </div>
        </>
        
    );
}

export default Subpage;
