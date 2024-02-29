import styled, { keyframes } from 'styled-components';

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
  margin-top: 0px;
  font-size: 2.3em;
  font-weight: 500;
  max-width: 800px;
  color: #fff;
`;

export const Span = styled.span`
  color: #33ffff;
`;

export const Image = styled.img`
  width: 500px;
  margin-top: 80px;
`;

export const ContainerHome2 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const typingAnimation = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const Escrevendo = styled.p`
  color: #696e75;
  max-width: 550px;
  font-size: 1.3em;
  position: absolute;
  top: 500px;
  overflow: hidden;
  white-space: wrap;
  animation: ${typingAnimation} 3s steps(40, end);
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

  &:hover {
    transform: scale(1.05);
  }
`;