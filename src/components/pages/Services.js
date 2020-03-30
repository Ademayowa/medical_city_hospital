import React, { useState } from 'react';
import ServicesList from './home/ServicesList';
import Title from './home/Title';
import { FaHospital } from 'react-icons/fa';
import { FaChild } from 'react-icons/fa';
import { FaUserNurse } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import { FaFlask } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';
import { FaDiagnoses } from 'react-icons/fa';
import { FaMedkit } from 'react-icons/fa';

const Services = () => {
  const [services] = useState([
    {
      id: '1',
      icon: <FaUserNurse />,
      title: 'Nursing Center',
      info:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et exducimus facilis dolor. Adipisci dignissimos iste, esse tempore.'
    },
    {
      id: '2',
      icon: <FaDiagnoses />,
      title: 'Critical Care',
      info:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et exducimus facilis dolor. Adipisci dignissimos iste, esse tempore.'
    },
    {
      id: '3',
      icon: <FaRegCommentDots />,
      title: 'Care Advice',
      info:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et exducimus facilis dolor. Adipisci dignissimos iste, esse tempore.'
    },
    {
      id: '4',
      icon: <FaFlask />,
      title: 'Laboratory',
      info:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et exducimus facilis dolor. Adipisci dignissimos iste, esse tempore.'
    },
    {
      id: '5',
      icon: <FaHeartbeat />,
      title: 'Heart Surgery',
      info:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et exducimus facilis dolor. Adipisci dignissimos iste, esse tempore.'
    },
    {
      id: '6',
      icon: <FaMedkit />,
      title: 'Emergency',
      info:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et exducimus facilis dolor. Adipisci dignissimos iste, esse tempore.'
    }
  ]);

  return (
    <section className='services'>
      <div className='text-center'>
        <Title title='services' />
      </div>
      <div className='container' style={servicesStyle}>
        {services.map(service => (
          <ServicesList service={service} />
        ))}
      </div>
    </section>
  );
};

const servicesStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  marginTop: '-50px'
};

export default Services;
