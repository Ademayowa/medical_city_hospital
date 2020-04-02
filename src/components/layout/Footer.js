import React, { useState } from 'react';
import Hero from '../pages/home/Hero';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  const [items] = useState([
    {
      id: '1',
      title: 'About Medic',
      about:
        ' We are an health body that connects patients and users with other authorized legal practionals across the globe. We do this via our mobile and web applications.'
    },
    {
      id: '2',
      title: 'Recent Posts',
      posts: [
        'The importance of regular medical checkups.',
        <br />,
        'Eating fruits and vegetables is good for a healthy living.',
        <br />,
        'The importance of water in the body system.'
      ]
    },
    {
      id: '3',
      title: 'Our Services',

      services: [
        'Connecting patients to health centers.',
        <br />,
        'Emergency operations.',
        <br />,
        'Stanby ambulance for pregnant women.'
      ]
    },
    {
      id: '4',
      title: 'Contact Us',

      contact: [
        '1 Iju road fagba ishaga lagos.',
        <br />,
        '+234 567 098.',
        <br />,
        'www.medic.com'
      ]
    }
  ]);

  return (
    <Hero>
      <div className='footer-banner'>
        <div style={gridStyle} className='footer-bg pl-md-3'>
          {items.map((item, index) => (
            <ul key={index}>
              <li>
                <h4>{item.title}</h4>
              </li>
              <li className='mt-4'>{item.about}</li>
              <li> {item.posts}</li>
              <li>{item.services}</li>
              <li>{item.contact}</li>
            </ul>
          ))}
        </div>
        <FooterCopyright />
      </div>
    </Hero>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
  listStyleType: 'none',
  gridGap: '1rem'
};

export default Footer;
