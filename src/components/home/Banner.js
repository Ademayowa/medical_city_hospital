import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ title, subtitle }) => {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 text-left ml-auto'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Link to='#' className='btn btn-default mr-2 mb-2'>
              about
            </Link>
            <Link to='#' className='btn btn-outline-white mb-2'>
              services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
