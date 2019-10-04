import React, { Component } from 'react';
import WelcomeBackground from './WelcomeBackground';
import Information from './Information';
import OurServices from './OurServices';
import Visits from './Visits';
import Appointment from './Appointment';
import Testimonials from './Testimonials';

class Home extends Component {
  render() {
    return (
      <div>
        <WelcomeBackground />
        <Information />
        <OurServices />
        <Visits />
        <Appointment />
        <Testimonials />
      </div>
    );
  }
}

export default Home;
