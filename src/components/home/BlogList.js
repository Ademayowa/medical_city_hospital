import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BlogList = ({ blog: { title, desc, date, img } }) => {
  return (
    <Fragment>
      <div className='card z-depth-2'>
        <img src={img} alt='medic-img' className='img-fluid' />
        <article className='text-muted text-left ml-4 mt-4'>{date}</article>
        <div className='card-body'>
          <h5>{title}</h5>
          <p className='mb-2'>{desc}</p>
        </div>
      </div>
    </Fragment>
  );
};

BlogList.propTypes = {
  blog: PropTypes.object.isRequired
};

export default BlogList;
