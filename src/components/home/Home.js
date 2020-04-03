import React, { Fragment } from 'react';
import Hero from './Hero';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from '../layout/Footer';
import Blog from './Blog';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title='medic health care services'
          subtitle='providing worldclass medical services & connects patients with seasoned medical professionals.'
        ></Banner>
      </Hero>
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Footer />
    </Fragment>
  );
};

export default Home;
