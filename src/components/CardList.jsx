import React from 'react';
import './CardList.css';
import Card from './Card';

function CardList(props) {
  // console.log(props);
  const {groupTitme, cookItemList=[], viewIndex} = props;

  return (
    <div className='group'>
      <h1>{groupTitme}</h1>
      <div className='cardList'>
        {cookItemList.map((cookItem) => {
          return <Card key={cookItem.id} cookItem={cookItem} viewIndex={viewIndex} />
        })
        }      
      </div>
    </div>
  );
}

export default CardList;  