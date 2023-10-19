import React, { useState } from 'react';
import './trocatema.css'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import logo from '../assets/logo.png'

const Tema = () => {
    const [cor, setCor] = useState("light")

const Troca = () => setCor(cor === "light" ? "dark" : "light");

document.body.className = cor

return (
    <div>
    <button className={`botao-${cor}`} onClick={Troca}>
      <img src={cor === "light" ? sun : moon} alt="Ícone do botão" />
      {cor === "light" ? "dark" : "light"}
    </button>

    <img className='logo' src={logo} alt='logo'/>

  </div>
)
}
export default Tema