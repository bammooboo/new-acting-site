import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.lg}px) {
    max-width: 480px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const Item = styled.li`
  position: relative;
  width: 100%;
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.white};
  }
`;

const Text = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.8;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0;

  span {
    font-weight: 600;
    letter-spacing: 0.7px;
  }
`;

export { Container, Item, List, Text };