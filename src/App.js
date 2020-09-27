import React from 'react';
import Movies from './components/movies';
import { ToastContainer } from 'react-toastify';
import { Redirect, Route, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import './App.css';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <main className='container'>
        <Switch>
          <Route path='/register' component={RegisterForm}></Route>
          <Route path='/movies/:id' component={MovieForm}></Route>
          <Route path='/login' component={LoginForm}></Route>
          <Route path='/movies' component={Movies}></Route>
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

export default App;
