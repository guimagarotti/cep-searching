import { useState } from 'react';
import { GoLocation } from 'react-icons/go';
import './App.css';

const App = () => {
    const [input, setInput] = useState("");
    
    return (
      <div className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="inputArea">
            <input type="text" placeholder="Digite o CEP..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="searchButton"><GoLocation size={25} color='#fff' /></button>
        </div>

        <div className="infoArea">
            <h2>CEP: 12345678</h2>

            <p>Rua: teste rua</p>
            <p>Complemento: teste complemento</p>
            <p>Bairro: teste bairro</p>
            <p>Sorocaba - SP</p>
        </div>
      </div>
    )
}

export default App;
