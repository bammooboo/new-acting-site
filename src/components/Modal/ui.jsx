import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  position: fixed;
  z-index: ${({ show }) => show ? '5' : '-1'};
  background-color: ${colors.darkGrey};
  box-shadow: 0 24px 24px 0 rgba(0, 0, 0, 0.3), 0 0 24px 0 rgba(0, 0, 0, 0.22);
  border-radius: 2px;
  width: 100%;
  max-width: 90vw;
  margin: 32px auto;
  top: 50%;
  left: 50%;
  opacity: ${({ show }) => show ? '1' : '0'};
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};
  overflow: scroll;
  overflow-x: hidden;
  transition: opacity 0.5s linear;
  height: auto;
  max-height: 100vh;
  padding: 48px 16px 0;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  scrollbar-width: none;

  ::-webkit-scrollbar { 
    display: none;
  }

  @media (min-width: ${breakpoints.md}px) {
    padding: 48px 16px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    min-width: 700px;
    width: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  justify-content: center;
  padding: 16px;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (min-width: ${breakpoints.md}px) {
    svg line {
      stroke: ${colors.yellow};
      width: 100%;
      height: 100%;
    }
  }
`;

export { CloseButton, Container };