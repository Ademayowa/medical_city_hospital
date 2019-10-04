import React from 'react';

const WelcomeBackground = () => {
  return (
    <div style={{ marginTop: '-47px' }}>
      <div className="container-fluid wrapper">
        <div className="row wrapper-opacity">
          <div className="col-sm-12">
            <h3 className="display-4 white-text">
              WELCOME TO <br />
              <span className="text-info">MEDICAL CITY </span>HOSPITAL
            </h3>
            <h4>We care about your health</h4>
            <h4>Solving cases with technological solutions</h4>
            <button className="btn btn-info btn-lg mr-3 mt-3">Services</button>
            <button className="btn btn-light btn-lg mt-3">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBackground;
