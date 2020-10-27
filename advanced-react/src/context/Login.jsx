import React, { useContext } from 'react';
import UserContext from './userContext';

const Login = (props) => {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button onClick={() => userContext.onLoggedIn('username')}>Login</button>
    </div>
  );
};

export default Login;
