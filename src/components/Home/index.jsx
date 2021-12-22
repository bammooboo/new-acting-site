import React from 'react';
import DuoImage from '../DuoImage';
import HeroText from '../HeroText';
import Social from '../Social';
import { Container } from './ui';
import { breakpoints } from '../../ui';
import useWindowSize from '../../utils/useWindowSize';

const Home = ({ data, images }) => {
  const windowSize = useWindowSize();

  return (
    <Container>
      <DuoImage data={data} images={images} />
      {windowSize.width < breakpoints.lg ? (
        <HeroText data={data} />
      ) : null}
      {windowSize.width < breakpoints.lg ? (
        <Social />
      ) : null}
    </Container>
  );
};

export default Home;