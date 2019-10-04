import React from 'react';

const Visits = () => {
  return (
    <div className="container-fluid multilpe-visit-img">
      <div className="row">
        <div className="col-md-10 col-sm-10 visit-img-opacity">
          <h2 className="text-white">
            We eliminate the inconvinence of multiple visits
          </h2>
          <p>
            <i className="fa fa-check" />
            No unprofessional doctors
          </p>
          <p>
            <i className="fa fa-check" />
            No poor quality products
          </p>
          <p>
            <i className="fa fa-check" />
            No second injections
          </p>
          <button className="btn btn-info btn-lg">ReadMore</button>
        </div>
      </div>
    </div>
  );
};

export default Visits;
