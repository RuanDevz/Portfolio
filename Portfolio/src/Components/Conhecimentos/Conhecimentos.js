import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 700px;
`

export const TitleConhecimento = styled.h1`
text-align: left;
color: #fff;
font-size: 2em;
`

export const TitleTecnologia = styled.h2`
font-size: 2em;
color: #33ffff;
text-align: center;
`
export const P = styled.p`
color: #696e75;
font-size: 1em;
max-width: 600px;
`

export const ContainerTitle = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
letter-spacing: 1px;
`

export const ContainerSkills = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 600px;
`

export const Skills = styled.img`
  width: 125px;
  color: #33ffff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  background-color: #151515;
  border: 2px solid transparent; 
  transition: border 0.5s ease; 

  &:hover {
    border: 2px solid #33ffff; 
  }
`;

export const DivSkill = styled.div`
display: flex;
margin: 30px;
`