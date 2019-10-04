import React from 'react';

const Appointment = () => {
  return (
    <div className="container-fluid text-center appointment-call bg-light shadow-sm">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="display-5">
            Qualified doctors and professional specialist
          </h2>
          <p className="lead mt-3">Make appointment or call +123456789</p>
          <button className="btn btn-info btn-lg mt-2 p-3 shadow-lg">
            Make An Appointment
            <i className="fa fa-arrow-right ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
