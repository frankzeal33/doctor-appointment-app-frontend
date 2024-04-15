import React from 'react';

const Card = ({children}) => {
  return (
    <article className='card'>
        {children}
    </article>
  );
}

export default Card;
