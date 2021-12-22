import React, { useRef, useState } from 'react';
import Hamburger from '../../Hamburger';
import Menu from '../../Menu';
import { Container } from './ui';
import { LogoSmall } from '../../SVGs';
import { NavLink } from 'react-router-dom';
import  { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const MobileNav = ({ cv, links }) => {
  const [showMenu, setShowMenu] = useState(null);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);

    if (!showMenu) {
      disableBodyScroll(menuRef.current);
    } else {
      enableBodyScroll(menuRef.current);
    }
  };

  return (
    <>
      <Container>
        <Hamburger clicked={toggleMenu} active={showMenu} />
        <NavLink to="/" exact={`${true}`}>
          <LogoSmall />
        </NavLink>
      </Container>
      <Menu show={showMenu} clicked={toggleMenu} cv={cv} links={links} menuRef={menuRef} />
    </>

  );
}

export default MobileNav;