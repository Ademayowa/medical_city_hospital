import React from 'react';
import Img1 from '../../../img/img1.png';
import Img2 from '../../../img/img2.png';
import Img3 from '../../../img/img3.png';
import Title from './Title';

const About = () => {
  return (
    <section className='about'>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='row'>
              <div className='col-sm-7'>
                <img src={Img1} alt='' className='img-fluid' />
              </div>
              <div className='col-sm-5'>
                <img src={Img2} alt='' className='img-fluid' />
              </div>
              <div className='col-lg-12'>
                <img
                  src={Img3}
                  alt=''
                  className='img-fluid'
                  style={{
                    width: '800px',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
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
