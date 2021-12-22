import React from 'react';
import { Container, ExternalLink, Item, Link, List } from './ui';

const Links = ({ cv, links }) => {
  return (
    <Container>
      <List>
        {links.map((link, index) => (
          <Item key={index}>
            <Link to={`/${link.url}`} exact={`${true}`} activeclassname="active">{link.title}</Link>
          </Item>
        ))}
        {cv && (
          <Item>
            <ExternalLink href={cv} target="_blank" activeclassname="active">CV</ExternalLink>
          </Item>
        )}
      </List>
    </Container>
  );
};

export default Links;