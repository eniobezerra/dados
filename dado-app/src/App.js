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
      <h1>Jogar o Dado</h1>
      <button onClick={jogarDado}>Jogar</button>
      {numero && <img src={`/dado${numero}.jpg`} alt={`Face do dado ${numero}`} />}
    </div>
  );
}

export default App;
