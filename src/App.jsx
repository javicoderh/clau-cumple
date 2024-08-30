import React, { useContext, useState, useEffect } from 'react';
import { DrinksContext } from './drinks'; // Asegúrate de que la ruta es correcta
import './App.css'
import Tarjetas from './drinksDetails';


function App() {
  const { personas, setPersonas, piscola } = useContext(DrinksContext);
  const [inputValue, setInputValue] = useState(personas);

  // Actualiza el estado personas cuando el inputValue cambia
  useEffect(() => {
    setPersonas(inputValue);
  }, [inputValue, setPersonas]);

  // Maneja el cambio en el input
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setInputValue(isNaN(value) ? 0 : value); // Evita valores no numéricos
  };

  return (
    <>        
      <header>
        <h1>Cumple Clau</h1>
        <nav>
          <li >lista de compras</li>
          <li>costo del servicio</li>
        
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
        <div className="grid">
         <Tarjetas />
        </div> 
      </div> 
      
    </>
  );
}

export default App;