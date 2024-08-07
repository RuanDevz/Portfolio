/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  Container,
  TitleConhecimento,
  ContainerSkills,
  Skills,
  DivSkill,
  P,
  ContainerTitle,
  TitleTecnologia,
} from "./Conhecimentos";
import HTML from "../../assets/Icons/html.png";
import CSS from "../../assets/Icons/css-3.png";
import JAVASCRIPT from "../../assets/Icons/js.png";
import REACT from "../../assets/Icons/react.png";
import MYSQL from "../../assets/Icons/mysql.png";
import STYLEDCOMPONENTS from "../../assets/Icons/styled-components.png";
import NODE from "../../assets/Icons/NodeJS.png";
import TAILWINDCSS from "../../assets/Icons/Tailwind.png";
import TYPESCRIPT from "../../assets/Icons/Typescript.png";
import NEXTJS from '../../assets/Icons/Next.png'

const tecnologias = [
  {
    nome: "HTML",
    descricao:
      "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores",
  },
  {
    nome: "CSS",
    descricao:
      "CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense na decoração da sua página.",
  },
  {
    nome: "JAVASCRIPT",
    descricao:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web",
  },
  {
    nome: "TYPESCRIPT",
    descricao:
      "TypeScript é um superconjunto de JavaScript que adiciona digitação estática opcional e recursos avançados ao JavaScript.",
  },

  {
    nome: "REACT",
    descricao:
      "O React é uma biblioteca modular, o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação.",
  },
  {
    nome: "NEXTJS",
    descricao:
      "O Next.js é um framework para React,  conhecido por sua capacidade de renderização no lado do servidor e geração de sites estáticos",
  },

  {
    nome: "TAILWINDCSS",
    descricao:
      "O Tailwind CSS é um framework de desenvolvimento web que utiliza classes utilitárias para estilizar elementos HTML, oferecendo flexibilidade e eficiência na criação de layouts responsivos e personalizados.",
  },
  {
    nome: "STYLEDCOMPONENTS",
    descricao:
      "O Styled-components é uma biblioteca poderosa para estilização de componentes em aplicações React.",
  },
  {
    nome: "NODE",
    descricao:
      "Node.js é uma plataforma de desenvolvimento que permite usar JavaScript tanto no lado do servidor quanto no lado do cliente. Ele é eficiente para operações de I/O intensivas e é amplamente utilizado para criar aplicativos da web escaláveis e em tempo real, além de APIs RESTful.",
  },
  {
    nome: "MYSQL",
    descricao:
      "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation.",
  },
];

const Conhecimentos = () => {
  const [descricaoTecnologia, setDescricaoTecnologia] = useState(
    tecnologias[0]
  );

  return (
    <Container data-aos="fade-left" data-aos-delay="500" data-aos-offset="400">
      <ContainerTitle>
        <TitleConhecimento>Conhecimentos</TitleConhecimento>
        <P>* PASSE O MOUSE POR CIMA PARA LER SOBRE AS TECNOLOGIAS *</P>
        <TitleTecnologia>{descricaoTecnologia.nome}</TitleTecnologia>
        <P>{descricaoTecnologia.descricao}</P>
      </ContainerTitle>
      <ContainerSkills>
        {tecnologias.map((tecnologia) => (
          <DivSkill
            data-aos="flip-up"
            data-aos-delay="800"
            key={tecnologia.nome}
          >
            <Skills
              id="Skills"
              onMouseOver={() => setDescricaoTecnologia(tecnologia)}
              src={icons[tecnologia.nome]}
              alt={tecnologia.nome}
            />
          </DivSkill>
        ))}
      </ContainerSkills>
    </Container>
  );
};

const icons = {
  HTML,
  CSS,
  JAVASCRIPT,
  TYPESCRIPT,
  REACT,
  NEXTJS,
  NODE,
  MYSQL,
  STYLEDCOMPONENTS,
  TAILWINDCSS,
};

export default Conhecimentos;
