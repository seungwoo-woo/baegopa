import React, { useState, useEffect } from 'react';
import styles from "./Sub.module.css";


import { firebaseConfig } from '../addrecipe/firestore';
// === Firebase ======================================================
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, orderBy, limit } from "firebase/firestore";
import Card from '../../components/Card';
// -------------------------------------------------------------------



function Subpage(props) {

    const viewIndex = 'comment';

    let recipeDbList = [];    
    const [ recipeList, setRecipeList ] = useState([]);


    useEffect (() => {
        const readRecipeDB = async () => {
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        let q = '';

        q = query(collection(db, "RecipeDB"), where("division", "in", ["한식"]), limit(8));

        console.log(q);

        const queryAllSnapshot = await getDocs(q); 

        queryAllSnapshot.forEach((doc) => {
        const docCopy = {...doc.data(), docId: doc._document.key.path.segments[6]};
        recipeDbList.push(docCopy);
        console.log(docCopy);
        });
        console.log(queryAllSnapshot);

        setRecipeList(recipeDbList);

        console.log(recipeList);
    }
    
    readRecipeDB();

    }, []);

    const handleDivision = async (e) => {
        let keyword = [];
        keyword.push(e.target.innerHTML);
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        let q = '';

        q = query(collection(db, "RecipeDB"), where("division", "in", keyword), limit(8));

        const queryAllSnapshot = await getDocs(q); 

        queryAllSnapshot.forEach((doc) => {
        const docCopy = {...doc.data(), docId: doc._document.key.path.segments[6]};
        recipeDbList.push(docCopy);
        });
        setRecipeList(recipeDbList);
    }




    return (
        <>
        <div className={styles.wrapper}>

            {/* 분류 */}
            <div className={styles.recipe}>
                <div>
                {/* <h1>레시피 분류1</h1> */}
                </div>
                <div className={styles.value}>                    
                    <div>
                        <p onClick={handleDivision}>한식</p>
                    </div>
                    <div>
                        <p onClick={handleDivision}>중식</p>
                    </div>
                    <div>
                        <p onClick={handleDivision}>일식</p>
                    </div>
                    <div>
                        <p onClick={handleDivision}>양식</p>
                    </div>
                    <div>
                        <p onClick={handleDivision}>분식</p>
                    </div>
                    <div>
                        <p onClick={handleDivision}>야식</p>
                    </div>
                </div>
            </div> 
            {/* <CardList keyword={keyword} /> */}


            <div className={styles.group}>
                <div className={styles.cardList}>
                    {recipeList.map((recipe) => {
                    return <Card key={recipe.docId} recipe={recipe} viewIndex={viewIndex} />
                    })
                    }
                </div>
            </div>



        </div>
        </>
        
    );
}

export default Subpage;
