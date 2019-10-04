import React, { Component, Fragment } from 'react';
import BreadCrumb from '../layout/BreadCrumb';

class Service extends Component {
  render() {
    return (
      <Fragment>
        <BreadCrumb />

        <div className="container our-services">
          <div className="row services-content text-center">
            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fa fa-briefcase-medical mt-4 mb-4" />
                <h3>Medical Checkup</h3>
                <p>
                  We conduct medical checkups at Medical city to know the health
                  status of our patients. We care about your health
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fas fa-diagnoses mt-4 mb-4" />
                <h3>Diagnosis</h3>
                <p>
                  Patients are diagnosed based on their medical condition. Our
                  tools and equipment are fast and relaible
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fas fa-brain mt-4 mb-4" />
                <h3>Brain Treatment</h3>
                <p>
                  Treating brain defects is one of our major specialization. We
                  are equipped with the latest medical tools
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fas fa-x-ray mt-4 mb-4" />
                <h3>X-ray</h3>
                <p>
                  Our X-ray experts are readily available to attend to your
                  medical needs to attend to your medical needs
                </p>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fas fa-bong mt-4 mb-4" />
                <h3 className="mt-3 mb-3">Laboratorty Tests</h3>
                <p>We conduct tests to ensure patients' health are fine</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fas fa-dna mt-4 mb-4" />
                <h3>DNA Tests</h3>
                <p>
                  Running DNA tests with the latest technological tools are
                  readily avilable at our deposial
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fas fa-tooth mt-4 mb-4" />
                <h3>Dentistry</h3>
                <p>
                  Our dentists are readily avilable to meet patients needs 24/7
                  any time any day come what may
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-content icons">
                <i className="fa fa-briefcase-medical mt-4 mb-4" />
                <h3>Emergency</h3>
                <p>
                  Our emergency units are available 24/7 to attend to your
                  immediate needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Service;
