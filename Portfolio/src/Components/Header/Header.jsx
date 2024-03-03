import React from 'react';
import { HeaderContainer } from './HeaderStyle';
import { Logo } from './HeaderStyle';
import { Links } from './HeaderStyle';
import { ContainerLinks } from './HeaderStyle';
import { Logocolor } from '../Header/HeaderStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>R<Logocolor>u</Logocolor>a<Logocolor>n</Logocolor></Logo>
      <ContainerLinks>
        <a href="https://www.linkedin.com/in/ruan-batista-26790b1b8/" target='_blank' style={{ textDecoration: 'none' }}><Links>Linkedin</Links></a>
        <a href="https://github.com/RuanDevz" target='_blank' style={{ textDecoration: 'none' }}><Links>Github</Links></a>
        <a href="https://api.whatsapp.com/send?phone=5583988407953" target='_blank' style={{ textDecoration: 'none' }}><Links>WhatsApp</Links></a>
      </ContainerLinks>
    </HeaderContainer>
  );
};

export default Header;
