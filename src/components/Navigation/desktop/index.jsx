import React from 'react';
import { Container } from './ui';
import Links from '../../Links';

const DesktopNav = ({ cv, links }) => {
  return (
    <Container>
      <Links cv={cv} links={links} />
    </Container>
  );
}

export default DesktopNav;