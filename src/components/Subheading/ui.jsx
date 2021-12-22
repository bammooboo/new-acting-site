import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Heading = styled.h2`
  color: ${colors.yellow};
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: right;
  position: relative;
  margin: 0;
  margin-bottom: 20px;

  &:before {
    content: '';
    display: block;
    height: 1px;
    width: 30px;
    background-color: ${colors.yellow};
    position: absolute;
    top: 50%;
    right: 90px;
  }

  @media (min-width: ${breakpoints.md}px) {
    font-size: 48px;

    &:before {
      right: 200px;
      width: 80px;
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 56px;
    position: absolute;
    bottom: 110px;
    margin-bottom: 0;
    right: 0;

    &:before {
      right: 220px;
    }
  }
`;

export { Heading };