import React from 'react';
import { Container, Image, ImageWrap, ImgContain } from './ui';
import { breakpoints } from '../../ui';
import Subheading from '../Subheading';
import HeroText from '../HeroText';
import Social from '../Social';

import useWindowSize from '../../utils/useWindowSize';

const DuoImage = ({ data, images }) => {
  const windowSize = useWindowSize();

  return (
    <Container>
      {windowSize.width >= breakpoints.lg ? <HeroText data={data} /> : null}
      {images &&
        <ImageWrap>
          {images.map((image, index) => (
            <Image key={index}>
              <ImgContain>
                <img src={image.src} alt={image.alt} />
              </ImgContain>
            </Image>
          ))}
        </ImageWrap>
      }
      {windowSize.width >= breakpoints.lg ? <Social /> : null}
      {windowSize.width >= breakpoints.lg ? <Subheading data={data} /> : null}
    </Container>
  );
}

export default DuoImage;