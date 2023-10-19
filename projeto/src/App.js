import React from 'react';
import './App.css';
import Tema from './componente/trocatema';
import banner from './assets/banner.jpg';

function App() {
  return(
  <body>
    
     <Tema />
    
     <img className='banner' src={banner} alt="banner"/>
  
      <h1>Bem-vindo a Barber Shop</h1>

      <div className="negrito">
      <span>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas</span>
      <span>maiores expectativas</span>
      </div>

      <p> Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de</p>
        <p>mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará</p>
        <p>desapontado.</p>
      
      <p className='ass'> S. Kelly</p>
   </body>
  );
}

export default App;
