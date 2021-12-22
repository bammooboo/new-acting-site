import styled from 'styled-components';
import { colors } from '../../ui';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.yellow};
  z-index: 2;
  transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(-101%)'};
  transition: transform 0.6s ease-in;
  transition-delay: ${({ show }) => show ? '0.3s' : '0s'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.nav`
  color: ${colors.darkGrey};
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  position: relative;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    top: 50%;
    width: 0;
    background-color: ${colors.darkGrey};
  }

  &.active {
    &:before {
      left: -40px;
      width: 30px;
    }

    &:after {
      right: -40px;
      width: 30px;
    }
  }
`;

const ExternalLink = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    top: 50%;
    width: 0;
    background-color: ${colors.darkGrey};
  }

  &.active {
    &:before {
      left: -40px;
      width: 30px;
    }

    &:after {
      right: -40px;
      width: 30px;
    }
  }
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: white;
  position: absolute;
  transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.35s ease-in;
  transition-delay: ${({ show }) => show ? '0' : '0.4s'};
`;

export { Container, ExternalLink, Item, Link, List, NavList, Overlay };