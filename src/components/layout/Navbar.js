import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../img/logo.png';

const isActive = (history, path) => {
  if (history.location.pathname === path) return { backgroundColor: '#11182B' };
  else return { color: 'black' };
};

const Navbar = ({ history }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  mb-5 navbar-info">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" className="img-fluid" />
            <span className="text-dark m-2">Medical City</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
            <span className="navbar-toggler-icon fa fa-bars text-info" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={isActive(history, '/')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/services"
                  style={isActive(history, '/services')}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={isActive(history, '/contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
