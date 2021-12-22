import React from 'react';
import Modal from '../Modal';

import {Container, Details, Section, Text, VideoWrap } from './ui';

const VideoModal = ({ closeModal, modalRef, videoData, showModal }) => {

  return (
    <Modal show={showModal} close={closeModal} modalRef={modalRef}>
      <Section />
      <Container>
        <VideoWrap>
          <iframe title={videoData.title} src={`https://www.youtube.com/embed/${videoData.id}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
        </VideoWrap>
        <Details>
          {videoData.title && <Text><span>Title: </span>{videoData.title}</Text>}
          {videoData.description && <Text><span>Description: </span>{videoData.description}</Text>}
          {videoData.director && <Text><span>Director: </span>{videoData.director}</Text>}
          {videoData.year && <Text><span>Year: </span>{videoData.year}</Text>}
          {videoData.type && <Text><span>Type: </span>{videoData.type}</Text>}
        </Details>
      </Container>
    </Modal>
  );
};

export default VideoModal;