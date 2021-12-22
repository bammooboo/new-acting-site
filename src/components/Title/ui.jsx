import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Heading = styled.h1`
  border-bottom: 1px solid ${colors.yellow};
  color: ${colors.yellow};
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 24px;
  position: relative;
  margin: 0;
  margin-bottom: 32px;
  text-align: left;
  width: auto;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 48px;
    margin-bottom: 36px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 56px;
  }
`;

export { Heading };