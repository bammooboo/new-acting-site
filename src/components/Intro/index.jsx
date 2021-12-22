import React from 'react';
import { Chevron } from '../SVGs';

import { ButtonText, Container, IntroButton, Link, Text } from './ui';

const Intro = ({ description }) => {

  return (
    <Container>
      <Text>{description}</Text>
      <Link to="/showreel" exact={`${true}`}>
        <IntroButton><ButtonText>View showreel</ButtonText><Chevron /></IntroButton>
      </Link>
    </Container>
  );
};

export default Intro;