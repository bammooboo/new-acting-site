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

const VideoWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  iframe {
    width: 100%;
    height: 240px;
    padding: 32px 0;
  }

  @media (min-width: 501px) {
    iframe {
      width: 426px;
      padding: 0;
    }
  }

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 36px;

    iframe {
      width: 640px;
      height: 360px;
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    iframe {
      width: 1280px;
      height: 720px;
    }
  }
`;

export { Container, VideoWrap };