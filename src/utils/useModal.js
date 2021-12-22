import { useState } from 'react';
import  { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const useModal = (reference) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [currentVideo, setCurrentVideo] = useState({});

  const openImageModal = (headshot) => {
    setCurrentImage(headshot);
    setShowModal(true);
    disableBodyScroll(reference);
  }

  const openVideoModal = (video) => {
    setCurrentVideo(video);
    setShowModal(true);
    disableBodyScroll(reference);
  }

  const closeModal = () => {
    setShowModal(false);
    enableBodyScroll(reference);
  };

  return {
    closeModal,
    currentImage,
    currentVideo,
    openImageModal,
    openVideoModal,
    showModal
  };
};

export { useModal };