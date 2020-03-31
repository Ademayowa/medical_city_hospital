import React, { useState } from 'react';
import Logo from '../../img/logo.png';
import Hero from '../pages/home/Hero';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Footer = () => {
  const [items] = useState([
    {
      id: '1',
      about:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolore cumque tempore commodi repellat sit totam consequuntur? Fuga minus ratione aperiam placeat? Tempora, ab! Non repellat.',
      img: Logo
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
        '1 Iju road fagba isgahaga lagos.',
        <br />,
        '+234 567 098.',
        <br />,
        'www.medic.com'
      ]
    }
  ]);

  return (
    <Hero>
      <div className='banner footer-banner'>
        <div style={grid} className='pl-md-3'>
          {items.map((item, index) => (
            <ul key={index}>
              <li>{item.about}</li>
              <li>
                <h4>{item.title}</h4>
              </li>
              <li> {item.posts}</li>
              <li>{item.services}</li>
              <li>{item.contact}</li>
            </ul>
          ))}
        </div>
      </div>
    </Hero>
  );
};

const grid = {
  display: 'grid',
  // gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
  listStyleType: 'none',
  gridGap: '1rem'
};

export default Footer;
