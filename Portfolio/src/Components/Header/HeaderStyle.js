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
  padding-top: 50px;
  animation: ${fadeIn} 1s ease-in;

  @media screen and (max-width: 767px) {
  display: flex;
  gap: 80px;
  justify-content: space-around;
}
`;

export const MenuHamburger = styled.div`
#checkbox {
  display: none;
}

.toggle {
  z-index: 2;
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: #33ffff;
  border-radius: 5px;
  transition-duration: .3s;
}

#checkbox:checked + .toggle .bars {
  margin-left: 13px;
}

#checkbox:checked + .toggle #bar2 {
  transform: rotate(135deg);
  margin-left: 0;
  transform-origin: center;
  transition-duration: .3s;
}

#checkbox:checked + .toggle #bar1 {
  transform: rotate(45deg);
  transition-duration: .3s;
  transform-origin: left center;
}

#checkbox:checked + .toggle #bar3 {
  transform: rotate(-45deg);
  transition-duration: .3s;
  transform-origin: left center;
}

`

export const Logo = styled.h1`
color: #fff;
font-size: 2.3em;
letter-spacing: 2px;
`

export const ContainerLinks = styled.div`
display: flex;
gap: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
  background-color: #151515a9;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} .5s ease;
  position: fixed;

  a{
    font-size: 2em;
  }
  @media screen and (max-width: 767px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
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