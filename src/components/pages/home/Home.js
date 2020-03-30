import React, { Fragment } from 'react';
import Hero from './Hero';
// import Information from './Information';
// import OurServices from './OurServices';
// import Visits from './Visits';
// import Appointment from './Appointment';
// import Testimonials from './Testimonials';
import Banner from './Banner';
import About from './About';
import Services from '../Services';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title='city health care services'
          subtitle='treating patients with right euipments'
        ></Banner>
      </Hero>
      <About />
      <Services />
    </Fragment>
  );
};

export default Home;
