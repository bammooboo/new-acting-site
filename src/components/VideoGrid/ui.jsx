import styled from 'styled-components';
import { breakpoints, colors } from '../../ui';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  height: 100%;
  max-width: 100%;
  margin-bottom: 32px;

  @media (min-width: ${breakpoints.md}px) {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-bottom: 36px;
  }


  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageWrap = styled.div`
  width: 100%;
`;

const ImgContain = styled.div`
  padding-top: 56.25%;
  position: relative;
  width: 100%;
  background-color: ${colors.darkerGrey};

  img {
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`;

const StyledP = styled.p`
  color: ${colors.white};
  font-size: 12px;
  left: 50%;
  letter-spacing: 1px;
  margin: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  color: ${colors.white};
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin: 16px 0;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 18px;
  }
`;

const Section = styled.div`
  background-color: ${colors.yellow};
  clip-path: polygon(0 60%, 90% 100%, 100% 100%, 0% 100%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Tag = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top: 12px;
  right: 0;
  z-index: 2;
`;

const TagText = styled.label`
  background-color: ${colors.yellow};
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 16px 8px 8px;
  text-align: right;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 16px;
  }
`;

const Accent = styled.div`
  background-color: ${colors.yellow};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%);
  height: inherit;
  left: 1px;
  position: relative;
  width: 17px;
`;

export {
  Accent,
  Container,
  ImageWrap,
  ImgContain,
  Section,
  StyledP,
  Tag,
  TagText,
  Title
};