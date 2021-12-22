import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  border-top: 1px solid ${colors.yellow};
`;

const Inner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 32px 0;

  @media (min-width: ${breakpoints.md}px) {
    padding: 48px 0;
  }

  @media (min-width: ${breakpoints.xl}px) {
    padding: 64px 0;
  }
`;

const IconLink = styled.a`
  cursor: pointer;

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
  }
`;

export { Container, Icon, IconLink, Inner };