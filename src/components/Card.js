import React from 'react';

const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <img src={props.avatar_url} style={{ width: '70px' }} alt='avatar' />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};

export default Card;
