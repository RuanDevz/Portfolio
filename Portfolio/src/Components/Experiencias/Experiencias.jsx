// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ContainerExperiencia, TitleExperiencia,ContainerOptionsExperiencia, OptionsExperiencia, ContainerResumoExperiencia,ResumoExperiencias,ContainerGeralExperiencia, TitleResumoExperiencia } from './../Experiencias/Experiencias';

const Experiencias = () => {
  return (
    <ContainerExperiencia>
        <TitleExperiencia>Experiências</TitleExperiencia>
      <ContainerGeralExperiencia>
        <ContainerOptionsExperiencia>
          <OptionsExperiencia>São João de Patos</OptionsExperiencia>
          <OptionsExperiencia>Find A Friend</OptionsExperiencia>
          <OptionsExperiencia>São João de Patos</OptionsExperiencia>
        </ContainerOptionsExperiencia>
        <ContainerResumoExperiencia>
          <TitleResumoExperiencia>São João de Patos</TitleResumoExperiencia>
          <ResumoExperiencias>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet tempore dicta voluptate soluta dolores, blanditiis laborum eius ullam. Dolorem ullam repudiandae amet explicabo quas ex facilis porro possimus minima!</ResumoExperiencias>
        </ContainerResumoExperiencia>
      </ContainerGeralExperiencia>
    </ContainerExperiencia>
  )
}

export default Experiencias;
