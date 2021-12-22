import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Container } from './ui';
import { useModal } from '../../utils/useModal';
import Backdrop from '../Backdrop';
import Title from '../Title';
import VideoGrid from '../VideoGrid';
import VideoModal from '../VideoModal';
import Footer from '../Footer';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const videoModal = useRef(null);

  const {
    closeModal, currentVideo, openVideoModal, showModal
  } = useModal(videoModal.current);

  useEffect(() => {
    axios.get('data/data.json')
      .then((res)=>{
        setVideos(res.data.videos);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title title="Videos" />
      <VideoGrid clicked={openVideoModal} videos={videos} />
      <Footer />
      <VideoModal showModal={showModal} closeModal={closeModal} videoData={currentVideo} modalRef={videoModal} />
      <Backdrop show={showModal} clicked={closeModal} />
    </Container>
  );
};

export default VideoGallery;