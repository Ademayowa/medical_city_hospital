import React, { Fragment } from 'react';
import Hero from './Hero';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';

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
      <Testimonials />
    </Fragment>
  );
};

export default Home;
