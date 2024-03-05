import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home.jsx'
import Experiencias from './Components/Experiencias/Experiencias.jsx'
import Conhecimentos from './Components/Conhecimentos/Conhecimentos.jsx'
import Projetos from './Components/Projetos/Projetos.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Experiencias/>
      <Conhecimentos/>
      <Projetos />
    </div>
  )
}

export default App