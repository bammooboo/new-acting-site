import React from 'react';

import { Accent, Container, ImageWrap, ImgContain, Section, StyledP, Tag, TagText, Title } from './ui';

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
              {video.tag &&
                <Tag>
                  <Accent />
                  <TagText>{video.tag}</TagText>
                </Tag>
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