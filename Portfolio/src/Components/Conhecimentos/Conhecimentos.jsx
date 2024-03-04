// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, TitleConhecimento,ContainerSkills, Skills, DivSkill,P,ContainerTitle } from './Conhecimentos'
import HTML from '../../assets/Icons/html.png'
import CSS from '../../assets/Icons/css-3.png'
import JS from '../../assets/Icons/js.png'
import REACT from '../../assets/Icons/react.png'
import MYSQL from '../../assets/Icons/mysql.png'
import Styledcomponents from '../../assets/Icons/styled-components.svg'

const Conhecimentos = () => {
  return (
    <Container>
    <ContainerTitle>
    <TitleConhecimento>Conhecimentos</TitleConhecimento>
    <P>* PASSE O MOUSE POR CIMA PARA LER SOBRE A TECNOLOGIA *</P>
    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, rerum ipsum fuga aut nemo, optio architecto reiciendis quo explicabo at quos doloremque placeat commodi accusamus id. Excepturi aspernatur suscipit error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, aliquid officiis. Dolorum odit molestiae labore delectus aut temporibus sequi architecto natus ex amet repellendus distinctio, dolore rerum nisi eligendi quod.</P>
    </ContainerTitle>
    <ContainerSkills>
      <DivSkill>
        <Skills src={HTML} alt='HTML' />
      </DivSkill>
      <DivSkill>
        <Skills src={CSS} alt='CSS' />
      </DivSkill>
      <DivSkill>
        <Skills src={JS} alt='JS' />
      </DivSkill>
      <DivSkill>
        <Skills src={REACT} alt='REACT' />
      </DivSkill>
      <DivSkill>
        <Skills src={Styledcomponents} alt='Styledcomponents' />
      </DivSkill>
      <DivSkill>
        <Skills src={MYSQL} alt='MYSQL' />
      </DivSkill>
    </ContainerSkills>
  </Container>
  )
}

export default Conhecimentos