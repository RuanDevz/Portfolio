import React, { useState } from 'react';
import { HeaderContainer, Logo, Links, ContainerLinks, Logocolor, MenuHamburger } from './HeaderStyle';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <HeaderContainer>
      <Logo>
        R<Logocolor>u</Logocolor>a<Logocolor>n</Logocolor>
      </Logo>
      <MenuHamburger>
        <input onClick={handleMenu} type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </MenuHamburger>
      <ContainerLinks style={{ display: menuActive ? 'flex' : 'none' }}>
        <a href="https://www.linkedin.com/in/ruan-batista-26790b1b8/" target='_blank' style={{ textDecoration: 'none' }}><Links>Linkedin</Links></a>
        <a href="https://github.com/RuanDevz" target='_blank' style={{ textDecoration: 'none' }}><Links>Github</Links></a>
        <a href="https://api.whatsapp.com/send?phone=5583988407953" target='_blank' style={{ textDecoration: 'none' }}><Links>WhatsApp</Links></a>
      </ContainerLinks>
    </HeaderContainer>
  );
};

export default Header;
