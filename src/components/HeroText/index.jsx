import React from 'react';
import Intro from '../Intro';
import Subheading from '../Subheading';
import { NameSVG } from '../SVGs';
import { Container, Inner, NameWrap } from './ui';
import { breakpoints } from '../../ui';

import useWindowSize from '../../utils/useWindowSize';

const Name = ({ data }) => {
  const windowSize = useWindowSize();

  return (
    <Container>
      <Inner>
        <NameWrap>
          <NameSVG />
        </NameWrap>
        {windowSize.width < breakpoints.lg ? <Subheading data={data} /> : null}
        <Intro description={data.description} />
      </Inner>
    </Container>
  );
};

export default Name;