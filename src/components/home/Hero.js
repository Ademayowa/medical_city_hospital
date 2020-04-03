import React from 'react';

const Hero = ({ hero, children }) => {
  return <div className={hero}>{children}</div>;
};

export default Hero;

Hero.defaultProps = {
  hero: 'defaultHero'
};
