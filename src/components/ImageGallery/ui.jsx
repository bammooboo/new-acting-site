import styled from 'styled-components';
import { breakpoints } from '../../ui';

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  padding: 76px 0 0;

  @media (min-width: ${breakpoints.md}px) {
    padding: 92px 0 0;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 120px 0 0;
  }
`;

export { Container };