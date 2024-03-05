import React from 'react';
import { TitleProject, ContainerGeralProject, ContainerProjects, Projeto } from './ProjetosStyle';

const Projetos = () => {

    const projects = [
        {
            Title: "São João de Patos",
            Resumo: "Site de votação, feito em React com API Sheetmonkey",
            Link: "https://saojoao-patos-certo.vercel.app/"
        },
        {
            Title: "FindAFriend",
            Resumo: "Site de doação de pets, Feito em HTML, CSS e Javascript",
            Link: "https://ruandevz.github.io/FindAFriend/"
        },
        {
            Title: "Mercado Livre",
            Resumo: "Site de buscas do mercado livre, feito em React",
            Link: "https://carrinho-de-compras-blush-delta.vercel.app/"
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
        }
    ];

    return (
        <ContainerGeralProject>
            <TitleProject>Projetos</TitleProject>
            <ContainerProjects>
                {projects.map((project, index) => (
                    <Projeto key={index}>
                        <h1>{project.Title}</h1>
                        <p>{project.Resumo}</p>
                        <a href={project.Link} target='_blank' style={{ textDecoration: 'none' }}><button>Visualizar projeto</button></a>
                    </Projeto>
                ))}
            </ContainerProjects>
        </ContainerGeralProject>
    );
};

export default Projetos;
