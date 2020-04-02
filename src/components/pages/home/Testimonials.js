import React, { useState } from 'react';
import Slider from 'react-slick';
import Quote from '../../../img/quote.png';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000
  };

  const [testimonies] = useState([
    {
      id: '1',
      quote: Quote,
      patient: 'Mrs. Sarah Jane',
      testimony:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid sequi neque repellat! Ab, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid'
    },
    {
      id: '2',
      quote: Quote,
      patient: 'Mr. John Doe',
      testimony:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid sequi neque repellat! Ab, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid'
    },
    {
      id: '3',
      quote: Quote,
      patient: 'Mr. Sam Smith',
      testimony:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid sequi neque repellat! Ab, hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate debitis, obcaecati cumque nostrum eveniet perspiciatis est distinctio inventore non, autem totam sapiente quod aliquid'
    }
  ]);

  return (
    <section className='testimonials'>
      <div className='testimonial-banner'>
        <div className='container col-md-10  m-auto'>
          <Slider {...settings}>
            {testimonies.map(item => (
              <div key={item.id}>
                <img src={Quote} alt='quote' className='img-fluid mb-5' />
                <p>{item.testimony}</p>
                <h5 className='mt-5 mb-5'>{item.patient}</h5>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
