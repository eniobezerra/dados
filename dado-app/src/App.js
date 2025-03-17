
import React, { useState } from 'react';
import './App.css';

function App() {
  const [numero, setNumero] = useState(null);

  const jogarDado = () => {
    const novoNumero = Math.floor(Math.random() * 6) + 1;
    setNumero(novoNumero);
  };

  return (
    <div className="App">
      <h1>Click no Botao Abaixo</h1>
      
      
      <button onClick={jogarDado}>jogar Dado</button>
      <br></br>
      <br></br>
      {numero && <img src={`/dado${numero}.png`} alt={`Face do dado ${numero}`} />}
    </div>
  );
}

export default App;
