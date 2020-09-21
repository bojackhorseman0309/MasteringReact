import React from 'react';

//Stateless functional Component
const NavBar = (props) => {
  console.log('Navbar Rendered');
  return (
    <nav className='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
