import React from 'react';

const Hero = ({ hero, children }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;

Hero.defaultProps = {
  hero: 'defaultHero'
};
