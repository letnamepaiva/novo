import React, { useState } from 'react';
import './App.css';
import Tema from './componente/trocatema';
import {banner} from './assets'

function App() {
  return(
    <div>
      <Tema />
      <div>
      <img src={banner} alt="Descrição da imagem" />
    </div>
      <h1>Bem-vindo a Barber Shop</h1>
      
      <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</p>
      
      <p> Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
      
      <p> S. Kelly</p>
    </div>
  );
}

export default App;
