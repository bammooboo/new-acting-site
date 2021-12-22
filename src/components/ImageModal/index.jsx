import React from 'react';
import Modal from '../Modal';

import {Container, Details, ImageWrap, Section, Text } from './ui';
import { breakpoints } from '../../ui';
import useWindowSize from '../../utils/useWindowSize';

const ImageModal = ({ closeModal, imageData, modalRef, showModal }) => {
  const windowSize = useWindowSize();

  return (
    <Modal show={showModal} close={closeModal} modalRef={modalRef}>
      <Section />
      <Container>
        {windowSize.width > breakpoints.sm ?
          <ImageWrap>
            <img src={imageData.src} alt={imageData.title} />
          </ImageWrap> :
          <ImageWrap>
            <img src={imageData.thumbSrc} alt={imageData.title} />
          </ImageWrap>
        }
        <Details>
          {imageData.title && <Text><span>Title: </span>{imageData.title}</Text>}
          {imageData.photographer && <Text><span>Photographer: </span>{imageData.photographer}</Text>}
          {imageData.photographerSite && <Text><span>Website: </span>{imageData.photographerSite}</Text>}
          {imageData.year && <Text><span>Year: </span>{imageData.year}</Text>}
        </Details>
      </Container>
    </Modal>
  );
};

export default ImageModal;