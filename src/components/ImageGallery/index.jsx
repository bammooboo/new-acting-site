import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Container } from './ui';
import { useModal } from '../../utils/useModal';
import Backdrop from '../Backdrop';
import ImageGrid from '../ImageGrid';
import ImageModal from '../ImageModal';
import Title from '../Title';
import Footer from '../Footer';

const ImageGallery = () => {
  const [headshots, setHeadshots] = useState([]);
  const imageModal = useRef(null);

  const {
    showModal, openImageModal, closeModal, currentImage
  } = useModal(imageModal.current);

  useEffect(() => {
    axios.get('data/data.json')
      .then((res)=>{
        setHeadshots(res.data.headshots);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title title="Headshots" />
      <ImageGrid clicked={openImageModal} headshots={headshots} />
      <Footer />
      <ImageModal showModal={showModal} closeModal={closeModal} imageData={currentImage} modalRef={imageModal} />
      <Backdrop show={showModal} clicked={closeModal} />
    </Container>
  );
};

export default ImageGallery;