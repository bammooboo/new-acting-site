import React from 'react';
import { Container, Icon, IconLink } from './ui';
import { Email, Facebook, Imdb, Instagram, Spotlight, Twitter } from '../SVGs';

const Social = () => {
  return (
    <Container>
      <IconLink href="mailto:info@tristanpretty.com" target="_blank">
        <span>Link to Email</span>
        <Icon>
          <Email />
        </Icon>
      </IconLink>
      <IconLink href="https://twitter.com/trispretty" target="_blank">
        <span>Link to Twitter</span>
        <Icon>
          <Twitter />
        </Icon>
      </IconLink>
      <IconLink href="https://www.instagram.com/trispretty/" target="_blank">
        <span>Link to Instagram</span>
        <Icon>
          <Instagram />
        </Icon>
      </IconLink>
      <IconLink href="https://www.facebook.com/trispretty/" target="_blank">
        <span>Link to Facebook</span>
        <Icon>
          <Facebook />
        </Icon>
      </IconLink>
      <IconLink href="https://www.spotlight.com/0691-9056-5660" target="_blank">
        <span>Link to Spotlight</span>
        <Icon>
          <Spotlight />
        </Icon>
      </IconLink>
      <IconLink href="https://www.imdb.com/name/nm9415620/" target="_blank">
        <span>Link to Imdb</span>
        <Icon>
          <Imdb />
        </Icon>
      </IconLink>
    </Container>
  );
};

export default Social;