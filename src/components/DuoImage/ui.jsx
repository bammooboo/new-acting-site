import styled from 'styled-components';
import { breakpoints } from '../../ui';

const Container = styled.section`
  width: 100%;
  position: relative;
  height: auto;

  @media (min-width: ${breakpoints.md}px) {
    display: flex;
    justify-content: flex-start;
  }

  @media (min-width: ${breakpoints.lg}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 768px;
    height: 768px;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    max-width: 400px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 430px;
    margin: unset;
  }
`;

const ImgContain = styled.div`
  padding-top: 125%;
  position: relative;
  width: 100%;

  img {
    display: block;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

const Image = styled.div`
  width: 100%;
  position: relative;

  &:last-of-type {
    display: none;
  }

  @media (min-width: ${breakpoints.md}px) {
    &:last-of-type {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 60%;
      right: -45%;
    }
  }
`;

export { Container, Image, ImageWrap, ImgContain };