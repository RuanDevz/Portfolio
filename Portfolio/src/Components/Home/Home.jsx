// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Apresentacao, Span, ContainerHome, Image, Escrevendo, ContainerHome2,Button } from './HomeStyle'; 
import Robozinho from '../../assets/Logo/Robozinho.png';
import Experiencias from '../Experiencias/Experiencias.jsx'

const Home = () => {
  return (
    <div>
      <ContainerHome>
        <Apresentacao>
        Em Busca de Novas Oportunidades: Programador Empenhado em Contribuir para o <Span> Desenvolvimento de Projetos</Span> Digitais de Excelência
        </Apresentacao>
        <Image src={Robozinho} alt="Robozinho" />
      </ContainerHome>
      <ContainerHome2>
        <Escrevendo>Meu nome é <Span>Ruan Batista</Span>, Desenvolvedor Front-end</Escrevendo>
        <a href={<Experiencias />}><Button>Venha me Conhecer!</Button></a>
      </ContainerHome2>
    </div>
  );
};

export default Home;
