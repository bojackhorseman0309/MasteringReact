import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import './App.css';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './components/logout';
import auth from './services/authService';
import ProtectedRoute from './components/common/protectedRoute';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <NavBar user={user}></NavBar>
        <main className='container'>
          <Switch>
            <Route path='/register' component={RegisterForm}></Route>
            <Route path='/login' component={LoginForm}></Route>
            <Route path='/logout' component={Logout}></Route>
            <ProtectedRoute
              path='/movies/:id'
              component={MovieForm}
            ></ProtectedRoute>
            <Route
              path='/movies'
              render={(props) => <Movies {...props} user={user}></Movies>}
            ></Route>
            <Route path='/customers' component={Customers}></Route>
            <Route path='/rentals' component={Rentals}></Route>
            <Route path='/notFound' component={NotFound}></Route>
            <Redirect from='/' exact to='/movies'></Redirect>
            <Redirect to='/notFound'></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
