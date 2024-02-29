// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Apresentacao, Span, ContainerHome, Image, Escrevendo, ContainerHome2,Button } from './HomeStyle'; 
import Robozinho from '../../assets/Logo/Robozinho.png'; 

const Home = () => {
  return (
    <div>
      <ContainerHome>
        <Apresentacao>
          Ajudando empresas a construírem <Span>produtos digitais</Span> de forma moderna e de alta qualidade.
        </Apresentacao>
        <Image src={Robozinho} alt="Robozinho" />
      </ContainerHome>
      <ContainerHome2>
        <Escrevendo>Meu nome é <Span>Ruan Batista</Span>, Desenvolvedor Front-end</Escrevendo>
        <Button>Venha me Conhecer!</Button>
      </ContainerHome2>
    </div>
  );
};

export default Home;
