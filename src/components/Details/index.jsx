import React from 'react';
import { Container, Item, List, Text } from './ui';

const Details = ({ stats }) => (
  <Container>
    <List>
      {stats.location && (
        <Item>
          <Text><span>Location: </span>{stats.location}</Text>
        </Item>
      )}
      {stats.height && (
        <Item>
          <Text><span>Height: </span>{stats.height}</Text>
        </Item>
      )}
      {stats.weight && (
        <Item>
          <Text><span>Weight: </span>{stats.weight}</Text>
        </Item>
      )}
      {stats.playingAge && (
        <Item>
          <Text><span>Playing Age: </span>{stats.playingAge}</Text>
        </Item>
      )}
      {stats.appearance && (
        <Item>
          <Text><span>Appearance: </span>{stats.appearance}</Text>
        </Item>
      )}
      {stats.nationality && (
        <Item>
          <Text><span>Nationality: </span>{stats.nationality}</Text>
        </Item>
      )}
      {stats.eyeColour && (
        <Item>
          <Text><span>Eye Colour: </span>{stats.eyeColour}</Text>
        </Item>
      )}
      {stats.hairColour && (
        <Item>
          <Text><span>Hair Colour: </span>{stats.hairColour}</Text>
        </Item>
      )}
      {stats.hairLength && (
        <Item>
          <Text><span>Hair Length: </span>{stats.hairLength}</Text>
        </Item>
      )}
      {stats.facialHair && (
        <Item>
          <Text><span>Facial Hair: </span>{stats.facialHair}</Text>
        </Item>
      )}
      {stats.voiceCharacter && (
        <Item>
          <Text><span>Voice Character: </span>{stats.voiceCharacter}</Text>
        </Item>
      )}
      {stats.voiceQuality && (
        <Item>
          <Text><span>Voice Quality: </span>{stats.voiceQuality}</Text>
        </Item>
      )}
    </List>
  </Container>
);

export default Details;