import React from 'react';

const ServicesList = ({ service }) => {
  const { title, info, icon } = service;

  return (
    <section className='container services-list'>
      <div style={iconStyle}>
        <i>{icon}</i>
      </div>
      <div className='contents'>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </section>
  );
};

const iconStyle = {
  fontSize: '2.5rem',
  position: 'relative',
  top: '60px',
  color: '#69D0A2'
};

export default ServicesList;
