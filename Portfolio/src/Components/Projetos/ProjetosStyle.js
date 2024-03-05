import styled from 'styled-components'
export const ContainerGeralProject = styled.div`
background-color: #151515;
display: flex;
flex-direction: column;
align-items: center;
`
export const TitleProject = styled.h1`

text-align: center;
font-size: 2em;
color: #fff;
padding: 50px 0px;

`

export const ContainerProjects = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-wrap: wrap;
gap: 80px;
max-width: 1600px;
`

export const Projeto = styled.div`
display: flex;
flex-direction: column;
background-color: #111111;
padding: 50px;
border-radius: 5px;
width: 400px;
border: 2px solid transparent; 
transition: border 0.5s ease; 

  &:hover {
    border: 2px solid #33ffff; 
  }

h1{
    text-align: center;
    font-size: 1.5em;
    color: #33ffff;
    margin: 10px 0px;
}

p{
    text-align: center;
    color: #696e75;
    margin: 10px 0px;
}

button{
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    color: #ffffff80;
    text-shadow: none;
    background: transparent;
    cursor: pointer;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    transition: 0.5s ease;
    user-select: none;

    &:hover,
    :focus {
    color: #ffffff;
    background: #33ffffa8;
    border: 1px solid #33ffffa8;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #33ffffa8, 0 0 20px #33ffffa8, 0 0 50px #33ffffa8,
        0 0 100px #33ffffa8;
}

a{
    text-decoration: none;
}

    
}
`