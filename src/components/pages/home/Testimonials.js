import React from 'react';
import Testimonial from '../../../img/testimonials.jpeg';

const Testimonials = () => {
  return (
    <div className="patient-testimonials container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-4">
            <span className="text-info">Patient</span> Testimonials
          </h3>
          <p className="lead">What people say about us</p>
          <div className="col-md-2 mx-auto">
            <img
              src={Testimonial}
              className="rounded-circle img-fluid"
              alt="logo"
            />
          </div>
          <p className="lead mt-3">
            <q>
              I got denial from different doctors because of a unique and
              complicated case. Dr. Smith however brought me hope and eargly
              took me into surgery that was succesful. Thank you doctor.
            </q>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
