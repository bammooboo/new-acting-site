import styled from 'styled-components';

import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  padding: 76px 0 0;
  color: ${colors.white};

  @media (min-width: ${breakpoints.md}px) {
    padding: 92px 0 0;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 120px 0 0;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 36px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    flex-flow: row nowrap;
  }

  @media (min-width: ${breakpoints.xl}px) {
    justify-content: space-evenly;
  }
`;

const Image = styled.div`
  max-width: 450px;
  margin: 0 auto;
  margin-bottom: 24px;
  display: none;
  width: 100%;

  @media (min-width: ${breakpoints.lg}px) {
    margin: 0;
    display: block;
  }

  @media (min-width: ${breakpoints.xl}px) {
    max-width: 500px;
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

export { Container, Image, ImgContain, Inner };