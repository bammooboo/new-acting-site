import styled from 'styled-components';
import { breakpoints } from '../../ui';

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  top: -45px;

  @media (min-width: ${breakpoints.md}px) {
    top: -60px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    position: absolute;
    max-width: 340px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: 1;
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: 470px;
  }
`;

const Inner = styled.div`
  margin: 0;
  width: 100%;

  svg {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}px) {
    svg {
      width: unset;
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    svg {
      width: 100%
    }
  }
`;

const NameWrap = styled.h1`
  margin: 0;

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 20px;
    text-align: right;
  }
`;

export { Container, Inner, NameWrap };