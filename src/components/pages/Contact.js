import React, { Component, Fragment } from 'react';
import InputGroup from '../common/InputGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import BreadCrumb from '../layout/BreadCrumb';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    // Clear state
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  render() {
    return (
      <Fragment>
        <BreadCrumb />

        <div className="container contact-us">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="display-4">
                <span className="text-info">Get</span> In Touch
              </h2>
            </div>
            <div className="col-md-6 col-sm-6 mb-4">
              <form onSubmit={this.onSubmit}>
                <InputGroup
                  placeholder="Your Name"
                  name="name"
                  required="required"
                  onChange={this.onChange}
                  value={this.state.subject}
                />

                <InputGroup
                  placeholder="Your Email"
                  name="email"
                  required="required"
                  onChange={this.onChange}
                  value={this.state.email}
                />

                <InputGroup
                  placeholder="Subject"
                  name="subject"
                  required="required"
                  onChange={this.onChange}
                  value={this.state.subject}
                />
                <TextAreaFieldGroup
                  placeholder="Write Message"
                  name="message"
                  rows="9"
                  required="required"
                  onChange={this.onChange}
                  value={this.state.message}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-lg"
                />
              </form>
            </div>

            <div className="col-md-6 col-sm-6 mb-4 contact-right-info">
              <div className="contact">
                <span className="fas fa-home fa-2x" />
                <h4>Contact Info</h4>
                <h6>20, Lee Fiong Fu Shangai, China</h6>
              </div>
              <div className="contact">
                <span className="fas fa-clock fa-2x" />
                <h4>Working Hours</h4>
                <h6>Monday - Friday 8:00AM - 6:00PM </h6>
                <h6>Saturday - Sunday 8:00AM - 5:00PM</h6>
              </div>
              <div className="contact">
                <span className="fas fa-envelope fa-2x" />
                <h4>Email</h4>
                <h6>Info@medicalcity.com</h6>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
