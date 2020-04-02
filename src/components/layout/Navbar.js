import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-info'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='logo' className='img-fluid' />
          <span style={{ fontSize: '1.5rem' }} className='text-dark m-2'>
            Medic
          </span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span />
          <span className='navbar-toggler-icon fa fa-bars text-dark' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
