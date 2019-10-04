import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 contact">
            <h5>Contact</h5>
            <ul className="nav">
              <li className="address">
                <span className="street ">20, Lee Fiong Fu Shangai, China</span>
              </li>
              <li className="address">
                <span>Info@medicalcity.com</span> <br />
                <span className="phone">+123456789</span> <br />
              </li>
            </ul>

            <div className="footer-icons">
              <i className="fab fa-facebook mr-3" />
              <i className="fab fa-twitter mr-3" />
              <i className="fab fa-instagram mr-3" />
              <i className="fab fa-linkedin mr-3" />
            </div>
          </div>

          <div className="col-md-3 col-sm-6 open-hours">
            <h5>Open hours</h5>
            <p>Monday-Friday 8:00AM-6:00PM</p>
            <p>Saturday-Sunday 8:00AM-6:00PM</p>
          </div>

          <div className="col-md-3 col-sm-6 links">
            <h5>links</h5>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/services">Services</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 text-white">
            <h5>Our services</h5>
            <div>Gynaecology</div>
            <div>Orthopedic</div>
            <div>Orology</div>
            <div>Dentistry</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
