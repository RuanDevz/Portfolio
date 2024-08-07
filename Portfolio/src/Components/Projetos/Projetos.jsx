import React from 'react';
import { TitleProject, ContainerGeralProject, ContainerProjects, Projeto } from './ProjetosStyle';

const Projetos = () => {

    const projects = [
        {
            Title: "EcoMarket",
            Resumo: "Ecomerce de compras feito em NextJs, Typescript, TailwindCSS, Sanity, Shadcn, ShoppingCart e Stripe",
            Link: "https://eco-market-phi.vercel.app/"
        },

        {
            Title: "Club Clothing",
            Resumo: "Ecomerce de compras feito com React, Typescript, TailwindCSS, Node.js, NextUI e Postgres",
            Link: "https://club-ecomerce.vercel.app/"
        },
        {
            Title: "TypeWeather",
            Resumo: "Site de previsão do tempo, utilizando React Typescript TailwindCSS e API OpenWeatherMap",
            Link: "https://type-weather-two.vercel.app/"
        },
        {
            Title: "RentCars",
            Resumo: "Site de aluguel de carros feito em React, Swiper e AOS",
            Link: "https://rent-cars-lyfn.vercel.app/"
        },
        {
            Title: "São João de Patos 2024",
            Resumo: "Site de votação, feito em React com API Sheetmonkey,TailwindCSS e Node.js",
            Link: "https://saojoaodepatos2024.vercel.app/"
        },
        {
            Title: "Mercado Livre",
            Resumo: "Site simples para buscas de produtos com API do Mercado Livre",
            Link: "https://mercado-livre-rho.vercel.app/"
        },
        {
            Title: "BuenoBeauty",
            Resumo: "Site para de cabeleleiro feito com React, TailwindCSS e AOS para animações",
            Link: "https://bueno-beauty.vercel.app/"
        },
        {
            Title: "Pizzaria Mania",
            Resumo: "Site de uma pizzaria feita de React, Node e MySQL",
            Link: "https://pizzariamania3.vercel.app/"
        },

        {
            Title: "São João de Patos 2023",
            Resumo: "Site de votação, feito em React com API Sheetmonkey,TailwindCSS e Node.js",
            Link: "https://saojoao-patos-certo.vercel.app/"
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
            Resumo: "Landingpage de apresentação do filme do Mario, feito com HTML, CSS e Javascript",
            Link: "https://ruandevz.github.io/youtube-site-mario/"
        },
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
