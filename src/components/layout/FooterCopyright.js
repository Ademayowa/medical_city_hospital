import React from 'react';

const FooterCopyright = () => {
  return (
    <div className='copyright pt-4 pb-4'>
      <p className='text-center text-white'>
        &copy; 2020. All rights reserved. Developed by {''}
        <a
          href='https://twitter.com/mayorstacks'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mayorstacks
        </a>
      </p>
    </div>
  );
};

export default FooterCopyright;
