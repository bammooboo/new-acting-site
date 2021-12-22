import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  color: ${colors.white};

  @media (min-width: ${breakpoints.md}px) {
    max-width: 500px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 350px;
  }
`;

const Text = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 1.8;
  position: relative;
  margin-left: 50px;
  margin-bottom: 20px;

  &:before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: ${colors.white};
    position: absolute;
    top: 14px;
    left: -50px;
    z-index: 2;
  }

  @media (min-width: ${breakpoints.md}px) {
    font-size: 16px;

    &:before {
      top: 17px;
    }
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  width: auto;
`;

const IntroButton = styled(Button)`
  margin-left: 50px;
  text-transform: uppercase;
  width: auto;
  max-width: 170px;
`;

const ButtonText = styled.span`
  margin-right: 10px;
`;

export { ButtonText, Container, IntroButton, Link, Text };