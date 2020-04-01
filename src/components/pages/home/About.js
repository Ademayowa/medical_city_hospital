import React from 'react';
import Img1 from '../../../img/img1.jpg';
import Title from '../../pages/home/Title';

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <img src={Img1} alt='' className='img-fluid' />
          </div>

          <div className='col-lg-7 pl-lg-5 mt-5'>
            <Title
              title='about'
              info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              illum. Unde est ut eius id. Exercitationem, blanditiis alias
              velit, odio id, suscipit impedit cupiditate labore laudantium vel
              repellendus autem fugit!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam, illum. Unde est ut eius id.
              Exercitationem, blanditiis alias velit, odio id, suscipit impedit
              cupiditate labore laudantium vel repellendus autem fugit! illum.
              Unde est ut eius id. Exercitationem, blanditiis alias velit, odio
              id, suscipit impedit cupiditate labore laudantium vel repellendus
              autem fugit!Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ullam, illum. Unde est ut eius id. Exercitationem,
              blanditiis alias velit, odio id, suscipit impedit cupiditate
              labore laudantium vel repellendus autem fugit. repellendus autem
              fugit!Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam, illum. Unde est ut eius id.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
