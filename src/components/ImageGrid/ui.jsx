import styled from 'styled-components';
import { breakpoints } from '../../ui';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  height: 100%;
  max-width: 100%;
  margin-bottom: 32px;

  @media (min-width: ${breakpoints.md}px) {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-bottom: 36px;
  }


  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ImageWrap = styled.div`
  padding-top: 125%;
  position: relative;
  width: 100%;

  img {
    cursor: pointer;
    display: block;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

export { Container, ImageWrap };