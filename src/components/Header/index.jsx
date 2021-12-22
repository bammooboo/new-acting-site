import React from 'react';
import useWindowSize from '../../utils/useWindowSize';

import { Container, Inner } from './ui';
import MobileNav from '../Navigation/mobile';
import DesktopNav from '../Navigation/desktop';
import { breakpoints } from '../../ui';

const Header = ({ data, links }) => {
  const windowSize = useWindowSize();

  return (
    <Container>
      <Inner>
        {windowSize.width < breakpoints.md ? <MobileNav cv={data.cv} links={links} /> : <DesktopNav cv={data.cv} links={links} />}
      </Inner>
    </Container>
  );
};

export default Header;