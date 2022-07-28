import { useState } from 'react';
import { GoLocation } from 'react-icons/go';

import Config from './environment/Config';
import './assets/css/App.css';

const App = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    async function handleInputChange() {
      if (!input) {
        window.alert("Campo vazio!");
        return;
      }

      try {
        const response = await Config.get(`${input}/json/`);
        setData(response.data);
        setInput("");
      }
      catch {
        alert("Erro! CEP inválido ou inacessível!");
        setInput("");
      }
    }
    
    return (
      <div className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="inputArea">
            <input type="text" placeholder="Digite o CEP..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="searchButton" onClick={handleInputChange} ><GoLocation size={25} color='#fff' /></button>
        </div>

        {Object.keys(data).length > 1 && (
          <div className="infoArea">
              <h2>CEP: {data.cep}</h2>

              <p>Rua: {data.logradouro}</p>
              <p>Bairro: {data.bairro}</p>
              <p>{data.localidade} - {data.uf}</p>
              <p>DDD: {data.ddd}</p>
          </div>
        )}
        
      </div>
    )
}

export default App;
