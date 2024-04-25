import React, { useEffect, useState } from 'react';
import { ContainerExperiencia, TitleExperiencia, ContainerOptionsExperiencia, OptionsExperiencia, ContainerResumoExperiencia, ResumoExperiencias, ContainerGeralExperiencia, TitleResumoExperiencia, ContainerTitle, Anoexperiencia, Empresatrabalhada } from './../Experiencias/Experiencias';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Experiencias = () => {


useEffect(() => {
  Aos.init({duration: "1500"})
},[])

  const [selectedOption, setSelectedOption] = useState("São João de Patos");

  const Todosresumos = {
    "São João de Patos": 'Este projeto FREELANCER foi realizado para a Prefeitura da cidade de Patos, com o objetivo de reunir votos de mais de 5 mil pessoas para avaliar a experiência do São João de 2023. O objetivo era entender as preferências e expectativas do público para o São João de 2024, incluindo as atrações desejadas para o evento.',
    "Experiencia 2": " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit neque ipsa recusandae ipsam, architecto quis perferendis aspernatur, nisi pariatur, quaerat obcaecati nostrum similique totam nihil facere quibusdam incidunt hic harum.",
    "Experiencia 3": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aspernatur. Quas rem repellendus vitae doloribus. Voluptate quam dignissimos aliquid! Sequi laboriosam possimus quasi adipisci eligendi deleniti natus autem aspernatur molestiae."
  };
  

  const Empresas = {
    "São João de Patos": "Prefeitura Municipal e Coollab Creative",
    "Experiencia 2": "Empresa da Experiência 2",
    "Experiencia 3": "Empresa da Experiência 3"
  };

  const tempodeexperiencia = {
    "São João de Patos": {
      mes: "JAN/FEV - ",
      ano: 2024,
      tempo: "(1 Mês)"
    },
    "Experiencia 2": {
      mes: "MAR - ",
      ano: 9999,
      tempo: "(Sem a Experiência)"
    },
    "Experiencia 3": {
      mes: "ABR - ",
      ano: 9999,
      tempo: "(Sem a Experiência)"
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getBorderStyle = (option) => {
    return selectedOption === option ? { color: '#33ffff' } : {};
  };

  return (
    <ContainerExperiencia data-aos="fade-right" data-aos-delay="200" >
      <TitleExperiencia>Experiências</TitleExperiencia>
      <ContainerGeralExperiencia id='ContainerGeralExperiencia'>
        <ContainerOptionsExperiencia>
          <OptionsExperiencia onClick={() => handleOptionClick("São João de Patos")} style={getBorderStyle("São João de Patos")}>São João de Patos</OptionsExperiencia>
          <OptionsExperiencia onClick={() => handleOptionClick("Experiencia 2")} style={getBorderStyle("Experiencia 2")}>Experiencia 2</OptionsExperiencia>
          <OptionsExperiencia onClick={() => handleOptionClick("Experiencia 3")} style={getBorderStyle("Experiencia 3")}>Experiencia 3</OptionsExperiencia>
        </ContainerOptionsExperiencia>
        <ContainerResumoExperiencia>
          <ContainerTitle>
            <TitleResumoExperiencia>{selectedOption}</TitleResumoExperiencia>
            {tempodeexperiencia[selectedOption] &&
              <Anoexperiencia>{tempodeexperiencia[selectedOption].mes} {tempodeexperiencia[selectedOption].ano} {tempodeexperiencia[selectedOption].tempo}</Anoexperiencia>
            }
          </ContainerTitle>
          <Empresatrabalhada>{Empresas[selectedOption]}</Empresatrabalhada>
          <ResumoExperiencias>{Todosresumos[selectedOption]}</ResumoExperiencias>
        </ContainerResumoExperiencia>
      </ContainerGeralExperiencia>
    </ContainerExperiencia>
  );
};

export default Experiencias;
