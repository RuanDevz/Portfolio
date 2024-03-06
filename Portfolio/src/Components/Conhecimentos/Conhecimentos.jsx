import React, { useState, useEffect } from 'react';
import { Container, TitleConhecimento, ContainerSkills, Skills, DivSkill, P, ContainerTitle, TitleTecnologia } from './Conhecimentos';
import HTML from '../../assets/Icons/html.png';
import CSS from '../../assets/Icons/css-3.png';
import JAVASCRIPT from '../../assets/Icons/js.png';
import REACT from '../../assets/Icons/react.png';
import MYSQL from '../../assets/Icons/mysql.png';
import STYLEDCOMPONENTS from '../../assets/Icons/styled-components.png';

// Declaração da variável tecnologias antes de ser usada
const tecnologias = [
  { nome: 'HTML', descricao: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores' },
  { nome: 'CSS', descricao: 'CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense na decoração da sua página.' },
  { nome: 'JAVASCRIPT', descricao: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web' },
  { nome: 'REACT', descricao: 'O React é uma biblioteca modular, o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação.' },
  { nome: 'STYLEDCOMPONENTS', descricao: 'O Styled-components é uma biblioteca poderosa para estilização de componentes em aplicações React.' },
  { nome: 'MYSQL', descricao: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation.' }
];

const Conhecimentos = () => {
  const [descricaoTecnologia, setDescricaoTecnologia] = useState(tecnologias[0]);


  return (
    <Container>
      <ContainerTitle>
        <TitleConhecimento>Conhecimentos</TitleConhecimento>
        <P>* PASSE O MOUSE POR CIMA PARA LER SOBRE AS TECNOLOGIAS *</P>
        <TitleTecnologia>{descricaoTecnologia.nome}</TitleTecnologia>
        <P>{descricaoTecnologia.descricao}</P>
      </ContainerTitle>
      <ContainerSkills>
        {tecnologias.map(tecnologia => (
          <DivSkill key={tecnologia.nome}>
            <Skills id='Skills' onMouseOver={() => setDescricaoTecnologia(tecnologia)} src={icons[tecnologia.nome]} alt={tecnologia.nome} />
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
  REACT,
  MYSQL,
  STYLEDCOMPONENTS
};

export default Conhecimentos;
