import React, { useEffect } from 'react';
import { TitleProject, ContainerGeralProject, ContainerProjects, Projeto } from './ProjetosStyle';

const Projetos = () => {

    const projects = [
        {
            Title: "São João de Patos",
            Resumo: "Site de votação, feito em React com API Sheetmonkey",
            Link: "https://saojoao-patos-certo.vercel.app/"
        },
        {
            Title: "Pizzaria Mania",
            Resumo: "Site de uma pizzaria feita de REACT, NODE e MySQL",
            Link: "https://pizzariamania3.vercel.app/"
        },
        {
            Title: "Italo Barbearia",
            Resumo: "Site de barbearia para a barbearia do meu bairro desenvolvido com HTML CSS SASS",
            Link: "https://italobarbearia.vercel.app/"
        },
        {
            Title: "FindAFriend",
            Resumo: "Site de doação de pets, Feito em HTML, CSS e Javascript",
            Link: "https://ruandevz.github.io/FindAFriend/"
        },
        {
            Title: "Buscador de CEP",
            Resumo: "Buscador de CEP feito com React e Axios",
            Link: "https://ruandevz.github.io/Buscador-de-CEP/"
        },
        {
            Title: "Mario e Luigi",
            Resumo: "Site de apresentação do filme do Mario, feito com HTML, CSS e Javascript",
            Link: "https://ruandevz.github.io/youtube-site-mario/"
        },
        {
            Title: "Em construção",
            Resumo: "Site de buscas do mercado livre, feito em React",
            Link: ""
        }
    ];

    return (
        <ContainerGeralProject data-aos="fade-down" data-aos-delay="400"  data-aos-offset="300">
            <TitleProject>Projetos</TitleProject>
            <ContainerProjects>
                {projects.map((project, index) => (
                    <Projeto data-aos="flip-left" data-aos-delay="800" key={index}>
                        <h1>{project.Title}</h1>
                        <p>{project.Resumo}</p>
                        <a href={project.Link} target='_blank' style={{ textDecoration: 'none' }}><button>Visualizar projeto</button></a>
                    </Projeto>
                ))}
            </ContainerProjects>
            <a href="https://github.com/RuanDevz?tab=repositories" target='_blank' id='repositorio'>Meus Repositorios</a>
        </ContainerGeralProject>
    );
};

export default Projetos;
