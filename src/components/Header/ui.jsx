import styled from 'styled-components';
import { breakpoints } from '../../ui';

const Container = styled.header`
  background: rgb(25,26,30);
  background: linear-gradient(90deg, rgba(25,26,30,1) 0%, rgba(25,26,30,1) 54%, rgba(33,33,33,1) 100%);
  color: #ffd018;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  z-index: 3;

  @media (min-width: ${breakpoints.lg}px) {
    height: 90px;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 16px;
  padding: 0 16px;
  height: 100%;
  max-width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 32px;
    padding: 0 32px;
  }


  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 32px;
    padding: 0 64px;
  }
`;

export { Container, Inner };