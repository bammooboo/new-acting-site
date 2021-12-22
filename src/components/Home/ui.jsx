import styled from 'styled-components';
import { breakpoints } from '../../ui';

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 76px;

  @media (min-width: ${breakpoints.md}px) {
    padding-top: 92px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 0;
    display: flex;
    align-items: center;
  }
`;

export { Container };