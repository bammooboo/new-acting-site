import styled from 'styled-components';
import { breakpoints } from '../../ui';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.lg}px) {
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 0;
    width: 26px;
    bottom: 220px;
  }
`;

const IconLink = styled.a`
  cursor: pointer;
  position: relative;

  &:not(:last-child) {
    margin-right: 20px;
  }

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

  @media (min-width: ${breakpoints.lg}px) {
    &:not(:last-child) {
      margin-right: unset;
      margin-bottom: 20px;
    }
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
  }
`;

export { Container, Icon, IconLink };