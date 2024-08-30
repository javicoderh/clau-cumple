import React, { useContext, useState, useEffect } from 'react';
import { DrinksContext } from './drinks'; // Asegúrate de que la ruta es correcta
import './App.css';
import Tarjetas from './drinksDetails';
import Costos from './costos';

function App() {
  const { personas, setPersonas } = useContext(DrinksContext);
  const [inputValue, setInputValue] = useState(personas);
  const [screen, setScreen] = useState('lista');

  // Actualiza el estado personas cuando el inputValue cambia
  useEffect(() => {
    setPersonas(inputValue);
  }, [inputValue, setPersonas]);

  // Maneja el cambio en el input
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setInputValue(isNaN(value) ? 0 : value); // Evita valores no numéricos
  };

  function handleLista() {
    setScreen('lista');
  }
  
  function handleCostos() {
    setScreen('costos');
  }

  return (
    <body>        
      <header>
        <h1>Cumple Clau.</h1>
        <nav>
          <li onClick={handleLista}>lista de compras</li>
          <li onClick={handleCostos}>costo del servicio</li>
        </nav>
      </header>
      <label className='input-label' htmlFor="personas-input">Cantidad de personas:</label>
      <input
        className='input-personas'
        id="personas-input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div id='displayScreen'>
        {screen === 'lista' ? (
          <div className="grid">
            <Tarjetas />
          </div>
        ) : (
          <h1 className='costos' style={{ color: 'white', padding: '20px', textAlign: 'start', margin: 'auto' }}>Costos <br /> <br /> barman: movilización- $15.000 <br /> <br /> lo demas auspicia Paulita Zapico <br /> <br /> !eh eh eh!</h1>
          
        )}
      </div>
    </body>
  );
}

export default App;