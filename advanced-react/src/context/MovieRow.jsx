import React, { useContext } from 'react';
import CartContext from './cartContext';
import UserContext from './userContext';

const MovieRow = (props) => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log('Cart Context', cartContext);

  return (
    <div>
      Movie Row {userContext.currentUser ? userContext.currentUser.name : ''}
    </div>
  );
};

export default MovieRow;
