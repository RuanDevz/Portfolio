import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const HeaderContainer = styled.header`
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 25px;
  animation: ${fadeIn} 1s ease-in;
`;

export const Logo = styled.h1`
color: #fff;
font-size: 2.3em;
letter-spacing: 2px;
`

export const ContainerLinks = styled.div`
display: flex;
gap: 80px;
`


export const Links = styled.li`
  color: #d8d8d8;
  font-size: 1.2em;
  cursor: pointer;
  list-style-type: none;
  background: 
    linear-gradient(
      to right,
      transparent,
      transparent
    ),
    linear-gradient(
      to right,
      #33ffff,
      #33ffff,
      #33ffff
    );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  padding-bottom: 1px;
  text-decoration: none;

  &:hover {
    color: #fff;
    background-size: 0 3px, 100% 3px;
  }
`;

export const Logocolor = styled.span`
color: #33ffff;
`