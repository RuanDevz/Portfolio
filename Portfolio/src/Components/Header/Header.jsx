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
        <Links>Linkedin</Links>
        <Links>Github</Links>
        <Links>Facebook</Links>
        </ContainerLinks>
    </HeaderContainer>
  )
}

export default Header