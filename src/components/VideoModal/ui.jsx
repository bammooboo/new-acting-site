import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  position: relative;
  width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    align-items: center;
    flex-flow: row nowrap;
  }
`;

const VideoWrap = styled.div`
  iframe {
    width: 100%;
    padding: 32px 0;
  }

  @media (min-width: 501px) {
    iframe {
      width: 426px;
      height: 240px;
      padding: 0;
    }
  }

  @media (min-width: ${breakpoints.md}px) {
    margin-right: 32px;

    iframe {
      width: 426px;
      height: 240px;
    }
  }

  @media (min-width: ${breakpoints.xl}px) {
    iframe {
      width: 854px;
      height: 480px;
    }
  }
`;

const Details = styled.div`
  color: ${colors.white};
  margin: 32px 0;

  @media (min-width: ${breakpoints.lg}px) {
    min-width: 200px;
  }

  @media (min-width: 1366px) {
    min-width: 300px;
  }
`;

const Text = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 1.8;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const Section = styled.div`
  background-color: ${colors.yellow};
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 30%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: ${breakpoints.md}px) {
    clip-path: polygon(20% 0, 70% 100%, 0 100%, 0 0);
  }
`;

export { Container, Details, Section, Text, VideoWrap };