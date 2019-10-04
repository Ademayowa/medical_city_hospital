import React from 'react';

const OurServices = () => {
  return (
    <div className="container services-home">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h2 className="display-4">
            <span className="text-info">Our</span> Services
          </h2>
          <p className="lead">
            Individualized quality care that meets the needs of patients
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <i className="fa fa-user-md" />
            <h4>Qualified Doctors</h4>
            <p>
              We have specialized experts who gives quality attention to your
              health care needs
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-body">
            <i className="fa fa-heartbeat" />
            <h4>Heart Surgery</h4>
            <p>We conduct heart surgery with the latest equipments</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-body">
            <i className="fa fa-eye" />
            <h4>Eye Defects Corrections</h4>
            <p>
              Our optical department is readily open 24/7 for your optical
              health care
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <i className="fa fa-ambulance" />
            <h4>Emergency Case</h4>
            <p>
              You can be sure that exceptional care is close by at medical city
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card card-body">
            <i className="fa fa-briefcase" />
            <h4>Medical Supplies</h4>
            <p>We transport medical supplies in places where they are needed</p>
          </div>
        </div>

        <div className="col-md-4 mb-2">
          <div className="card card-body">
            <i className="fa fa-stethoscope" />
            <h4>Medical Checkup</h4>
            <p>
              With our latest equipments, medical check up with us is amazing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
