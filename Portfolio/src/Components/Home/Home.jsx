import React, { useRef } from 'react';
import { Apresentacao, Span, ContainerHome, Image, Escrevendo, ContainerHome2, Button } from './HomeStyle'; 
import Robozinho from '../../assets/Logo/Robozinho.png';
import Experiencia from '../Experiencias/Experiencias.jsx'

const Home = () => {
  const experienciaRef = useRef(null);

  const handleScrollToExperiencia = () => {
    experienciaRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
        <Button onClick={handleScrollToExperiencia}>Venha me Conhecer!</Button>
      </ContainerHome2>
      <div ref={experienciaRef}>
        <Experiencia />
      </div>
    </div>
  );
};

export default Home;
