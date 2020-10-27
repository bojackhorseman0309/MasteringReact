import React, { Component } from 'react';
import Login from './context/Login';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';

class App extends Component {
  handleLoggedIn = (username) => {
    console.log('Getting the user: ' + username);
    const user = { name: 'Gui' };
    this.setState({ currentUser: user });
  };

  state = { currentUser: { name: null } };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage></MoviePage>
            <Login></Login>
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
