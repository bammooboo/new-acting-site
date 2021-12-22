import React from 'react';
import { Container, Item, ExternalLink, Link, List, NavList, Overlay } from './ui';

const Menu = ({ clicked, cv, links, menuRef, show }) => {
  return (
    <>
      <Container show={show} ref={menuRef}> 
        <NavList>
          <List>
            {links.map((link, index) => (
              <Item key={index}>
                <Link to={`/${link.url}`} exact={`${true}`} activeclassname="active" onClick={clicked}>{link.title}</Link>
              </Item>
            ))}
            {cv && (
              <Item>
                <ExternalLink href={cv} target="_blank" activeclassname="active" onClick={clicked}>CV</ExternalLink>
              </Item>
            )}
          </List>
        </NavList>
      </Container>
      <Overlay show={show} />
    </>
    
  );
};

export default Menu;