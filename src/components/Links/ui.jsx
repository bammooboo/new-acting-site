import styled from 'styled-components';
import { colors } from '../../ui';
import { NavLink } from 'react-router-dom';

const Container = styled.nav`
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-flow: row nowrap;
  color: ${colors.white};
`;

const Item = styled.li`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 0;
    bottom: 4px;
  }

  &:before {
    transition: width 0s ease, background .4s ease;
		left: 0;
		right: 0;
  }

  &:after {
		right: 2.2%;
    background: ${colors.white};
		transition: width .4s ease;
	}

  &:hover {
		&:before {
			width: 97.8%;
			background: ${colors.white};
      transition: width .4s ease;
		}

		&:after {
			width: 97.8%;
      background: 0 0;
			transition: all 0s ease;
		}
	}

  &.active {
    color: ${colors.yellow};

    &:after {
      background: ${colors.yellow};
      transition: none;
    }

    &:before {
      width: 97.8%;
      background: ${colors.yellow};
      transition: none;
    }
  }
`;

const ExternalLink = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;

  &:before, &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 0;
    bottom: 4px;
  }

  &:before {
    transition: width 0s ease, background .4s ease;
		left: 0;
		right: 0;
  }

  &:after {
		right: 2.2%;
    background: ${colors.white};
		transition: width .4s ease;
	}

  &:hover {
		&:before {
			width: 97.8%;
			background: ${colors.white};
      transition: width .4s ease;
		}

		&:after {
			width: 97.8%;
      background: 0 0;
			transition: all 0s ease;
		}
	}

  &.active {
    color: ${colors.yellow};

    &:after {
      background: ${colors.yellow};
      transition: none;
    }

    &:before {
      width: 97.8%;
      background: ${colors.yellow};
      transition: none;
    }
  }
`;

export { Container, ExternalLink, Item, Link, List };