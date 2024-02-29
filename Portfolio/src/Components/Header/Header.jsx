import React from 'react'
import { HeaderContainer } from './HeaderStyle'
import { Logo } from './HeaderStyle'
import { Links } from './HeaderStyle'
import { ContainerLinks } from './HeaderStyle'
import { Logocolor } from '../Header/HeaderStyle'

const Header = () => {
  return (
    <HeaderContainer>
        <Logo>R<Logocolor>u</Logocolor>a<Logocolor>n</Logocolor></Logo>
        <ContainerLinks>
        <Links>Blog</Links>
        <Links>Setup</Links>
        <Links>eBook</Links>
        </ContainerLinks>
    </HeaderContainer>
  )
}

export default Header