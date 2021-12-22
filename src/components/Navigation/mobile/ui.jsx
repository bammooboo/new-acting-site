import styled from 'styled-components';
import { breakpoints } from '../../../ui';

const Container = styled.div`
  grid-column: span 6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoints.md}px) {
    grid-column: span 8;
  }
`;

export { Container };