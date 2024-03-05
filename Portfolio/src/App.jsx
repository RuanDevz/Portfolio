import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home.jsx'
import Experiencias from './Components/Experiencias/Experiencias.jsx'
import Conhecimentos from './Components/Conhecimentos/Conhecimentos.jsx'
import Projetos from './Components/Projetos/Projetos.jsx'
import Footer from './Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Conhecimentos/>
      <Projetos />
      <Footer />
    </div>
  )
}

export default App