import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Information = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 2 }}
          config={{ delay: 1000, duration: 1000 }}
        >
          {props => (
            <div className="col-md-4 emergency" style={props}>
              <h5 className="mb-3">Emergency Case</h5>
              <p className="lead">
                Our emergency department is always ready to recieve patients
                with emergent cases.In house Doctors and Nurses are readily
                available to attend to patients who's cases are serious and
                frantic.
              </p>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1500, duration: 1500 }}
        >
          {props => (
            <div className="col-md-4 time-table" style={props}>
              <h5 className="mb-3">Doctors Time Table</h5>
              <p className="lead">
                At Medical City Hospital, there is always a Doctor to attend to
                whatsoever medical needs you want and then we offer patients the
                chance to reserve appointments with Doctors too.
              </p>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 4 }}
          config={{ delay: 2000, duration: 2000 }}
        >
          {props => (
            <div className="col-md-4 opening-hours" style={props}>
              <h5 className="mb-3">Opening Hours</h5>
              <p className="lead">
                Mon- Fri
                <span style={{ float: 'right' }}>8:00am - 6:00pm</span>
              </p>

              <p className="lead">
                Saturday
                <span style={{ float: 'right' }}>8:00am - 6:00pm</span>
              </p>

              <p className="lead">
                Sunday
                <span style={{ float: 'right' }}>8:00am - 6:00pm</span>
              </p>
            </div>
          )}
        </Spring>
      </div>
    </div>
  );
};

export default Information;
