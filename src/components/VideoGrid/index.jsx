import React from 'react';

import { Container, ImageWrap, ImgContain, Section, StyledP, Title } from './ui';

const VideoGrid = ({ clicked, videos }) => {

  const handleClick = (video) => {
    clicked(video);
  }

  return (
    <Container>
      {videos.map((video, index) => {
        return (
          <ImageWrap key={index}>
            <ImgContain>
              <Section />
              {video.thumbnail ?
                <img src={video.thumbnail} alt={video.title} onClick={() => handleClick(video)} /> :
                <StyledP>Video coming soon</StyledP>
              }
            </ImgContain>
            <Title>{video.title}</Title>
          </ImageWrap>
        )
      })}
    </Container>
  );
};

export default VideoGrid;