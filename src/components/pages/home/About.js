import React from 'react';
import Img1 from '../../../img/img1.jpg';
import Title from '../../pages/home/Title';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 d-none d-sm-block'>
            <img src={Img1} alt='medical-img' className='img-fluid' />
          </div>

          <div className='col-lg-7 pl-lg-5 mt-5'>
            <Title
              title='about'
              info='We are an health body that connects patients and users with other authorized legal practionals across the globe. We do this via our customized mobile apllications (which is AI powered), web applications and robotics (for emergency situations). We are a technological focused health care system that works 24 hours a day, 7days per week. Our laboratory are well equipped with latest medical devices for conducting various kinds of tests. Our services operates majorly on  various platforms (especially our mobile apps). Also our emegency cases are taken care of by our robotics team where immediate actions are taken in less than 20 seconds to attend to your medical needs. We run free medical checkups every saturday for people above 50 years old therby contributing to the wellbeing and upkeep of such individuals.'
            />
            <button className='btn btn-default btn-lg'>readmore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
