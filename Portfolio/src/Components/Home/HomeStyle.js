import styled, { keyframes } from 'styled-components';

const Typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 40em;
  }
`;

const Blinking = keyframes`
  50% {
    border-color: transparent;
  }
`;

const BlinkCursor = keyframes`
  50% {
    border-right-color: transparent;
  }
`;
const Fadeinlefttoright = keyframes`
0%{
  opacity: 0;
  transform: translateX(-10%);
}100%{
  opacity: 1;
  transform: translateX(0%);
}
`

const animationrobot = keyframes`
0%{
  transform: scale(1);
}

100%{
  transform: scale(1.2);
}

150%{
  transform: scale(1);
}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 180px;
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 40px;
`;


export const Apresentacao = styled.h1`
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 500;
  max-width: 800px;
  color: #fff;
  animation: ${Fadeinlefttoright} 1s;
`;


export const Span = styled.span`
  color: #33ffff;
`;

export const Image = styled.img`
  width: 500px;
  margin-top: 80px;
  animation: ${animationrobot} 1.5s ease-in-out forwards;
  animation-delay: 3s;
`;

export const ContainerHome2 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Escrevendo = styled.p`
  color: #696e75;
  max-width: 640px;
  font-size: 1.5em;
  margin-top: 20px;
  position: absolute;
  top: 500px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid #29cccc;
  animation: ${Typing} 4s steps(60), ${Blinking} 1s infinite step-end, ${BlinkCursor} 1s infinite;
`;

export const Button = styled.button`
  background-color: #29cccc;
  border-radius: 4px;
  padding: 20px 32px;
  border: none;
  color: #fff;
  font-size: 18px;
  max-width: 300px;
  transition: transform 0.5s ease; 
  cursor: pointer;
  animation: ${fadeIn} 1s;

  &:hover {
    transform: scale(1.05);
  }
`;
