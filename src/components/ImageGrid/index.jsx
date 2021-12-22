import React from 'react';

import { Container, ImageWrap } from './ui';
import { breakpoints } from '../../ui';

import useWindowSize from '../../utils/useWindowSize';

const ImageGrid = ({ clicked, headshots }) => {
  const windowSize = useWindowSize();

  const handleClick = (headshot) => {
    clicked(headshot);
  };

  return (
    <Container>
      {windowSize.width > breakpoints.sm ?
        <>
          {headshots.map((headshot, index) => {
            return (
              <ImageWrap key={index} >
                <img src={headshot.src} alt={headshot.title} onClick={() => handleClick(headshot)} />
              </ImageWrap>
            )
          })}
        </> :
        <>
          {headshots.map((headshot, index) => {
            return (
              <ImageWrap key={index}>
                <img src={headshot.thumbSrc} alt={headshot.title} onClick={() => handleClick(headshot)} />
              </ImageWrap>
            )
          })}
        </>
      }
    </Container>
  );
};

export default ImageGrid;