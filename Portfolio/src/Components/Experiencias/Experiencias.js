import styled from 'styled-components';



export const ContainerExperiencia = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #151515;
  height: 750px;
  border-radius: 10px;

`;

export const TitleExperiencia = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2em;
  margin-top: 180px;
  padding: 100px 0px;
`;

export const Anoexperiencia = styled.p`
  color: #696e75;
  margin-bottom: 30px;
  font-size: 1.1em;
`;

export const Empresatrabalhada = styled.h2`
  color: #fff;
  font-size: 1.1em;
  text-align: left;
  margin-bottom: 30px;
  margin-left: 100px;

  @media screen and (max-width: 1150px){
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    margin-left: 0px;
  }
`;

export const ContainerOptionsExperiencia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #111111;
  width: 500px;
  height: 130%;
  margin-left: 100px;

  @media screen and (max-width: 1150px){
    display: none;
  }
`;

export const ContainerGeralExperiencia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
`;

export const OptionsExperiencia = styled.p`
  font-size: 1.4em;
  font-weight: bolder;
  color: #fff;
  text-align: left;
  margin-top: 40px;
  cursor: pointer;
  padding: 15px 5px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1150px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerResumoExperiencia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  text-align: center;
`;

export const TitleResumoExperiencia = styled.h1`
  color: #fff;
  font-size: 2em;
  text-align: center;
  color: #29cccc;
  margin-bottom: 30px;

  @media screen and (max-width: 1150px){
    font-size: 1.3em;
  }
`;

export const ResumoExperiencias = styled.p`
  color: #696e75;
  font-size: 1.2em;
  letter-spacing: 2px;
  @media screen and (max-width: 1150px){
    font-size: 1em;
    max-width: 300px;
    text-align: center;
    margin: 0 auto;
  }
  
`;
