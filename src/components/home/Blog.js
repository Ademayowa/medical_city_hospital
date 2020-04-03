import React, { useState } from 'react';
import Img1 from '../../img/blog1.png';
import Img2 from '../../img/blog2.png';
import Img3 from '../../img/blog3.png';
import Img4 from '../../img/blog1.png';
import BlogList from './BlogList';
import Title from './Title';

const Blog = () => {
  const [blogs] = useState([
    {
      id: '1',
      date: 'jan 3 2020',
      title: 'Why we need to eat more fruits as adults',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda eum at hic repudiandae iste ipsum placeat aperiam.',
      img: Img1
    },
    {
      id: '2',
      date: 'April 25 2019',
      title: 'the importance of daily exercise',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda eum at hic repudiandae iste ipsum placeat aperiam.',
      img: Img2
    },
    {
      id: '3',
      date: 'December 15 2019',
      title: 'Why routine exercise helps mental abilities',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda eum at hic repudiandae iste ipsum placeat aperiam.',
      img: Img3
    },
    {
      id: '4',
      date: 'May 9 2019',
      title: 'Drinking more water than carbonated drinks',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda eum at hic repudiandae iste ipsum placeat aperiam.',
      img: Img4
    }
  ]);

  return (
    <section className='blog'>
      <Title title='blog' />
      <div className='container' style={blogStyle}>
        {blogs.map(blog => (
          <BlogList key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

const blogStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
  gridGap: '2.5rem'
};

export default Blog;
