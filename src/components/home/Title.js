import React from 'react';

const Title = ({ title, info }) => {
  return (
    <div className='section-title mb-5'>
      <h2>{title}</h2>
      <p className='mt-3'>{info}</p>
    </div>
  );
};

export default Title;
