import styled, { css } from 'styled-components';
import { colors } from '../../ui';

const Line = styled.span`
  background-color: ${colors.yellow};
  height: 1px;
  width: 20px;
  position: relative;
  transform-origin: 50% 50%;
  transition: color 0.5s;

  &.bottom, &.top {
    transform: rotate(0deg) translateY(0px);
	  transition: 0.5s;
  }

  &.middle {
    opacity: 1;
    transition: 0.6s;
  }
`;

const Container = styled.div`
  cursor: pointer;
  width: 20px;
  height: 14px;
  overflow: hidden;
  position: relative;
  z-index: 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  ${({ active }) => active && css`
    ${Line} {
        background-color: ${colors.darkGrey};
        transition: color 0.5s;
        &.bottom {
          transform: translateY(-7px) rotate(-45deg);
          transition: 0.5s;
        }

        &.top {
          transform: translateY(7px) rotate(45deg);
          transition: 0.5s;
        }

        &.middle {
          opacity: 0;
          transition: 0.6s;
        }
      }
  `}
`;

export { Container, Line };