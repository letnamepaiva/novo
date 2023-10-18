import { useState } from 'react';
import Conteudo from '../Conteudo';
import Logo from '../assets/logo.png';
import './style.css';

const Topo = () => {
    cont [corTema, setCorTema] = useState("tema-light");

    const trocatema = () => {
        setCorTema(corTema === "tema-light ? "tema-dark" : "tema-light")
    }
}

return (
    <div className={corTema}>
        <img src={Logo} alt="Logo" />
        <button onClick={trocarTema}>Trocar Tema</button>
    </div>
)

export default Topo;