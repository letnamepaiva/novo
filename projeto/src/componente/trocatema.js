import React, { useState } from 'react';
import './trocatema.css'

const Tema = () => {
    const [cor, setCor] = useState("Light")

const Troca = () => setCor(cor === "Light" ? "Dark" : "Light");

document.body.className = cor

return (
    <div className={cor}>
    <button onClick={Troca}>"Dark"</button>
    </div>
)
}
export default Tema