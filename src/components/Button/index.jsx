import styled from 'styled-components';
import { colors } from '../../ui';

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: 1px solid ${colors.white};
  box-shadow: none;
  color: ${colors.white};
  cursor: pointer;
  display: inline-flex;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  font-size: 14px;
  height: 40px;
  justify-content: center;
  letter-spacing: 0.43px;
  min-height: 40px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  outline: none;
  width: auto;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export { Button };