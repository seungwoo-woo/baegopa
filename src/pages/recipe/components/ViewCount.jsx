import React from 'react';

function ViewCount(props) {
  const { infos, setrecipeInfos } = props;

  return (
    <div className='viewcount'>
      <img src={ require('../images/viewcount.png') } />
      <span>{infos[0].viewCount}</span>
    </div>
  );
}

export default ViewCount;