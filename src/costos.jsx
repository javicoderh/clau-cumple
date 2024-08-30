import React from "react";
import './App.css'

const Costos = () => {
  const { piscola, espumante, apperol, ramazotti, hielo } = useContext(DrinksContext);

  return (
    <>
        <h1 className="Costos">Barman: $15.000 movilización, lo demas auspicia Paulita Zapico</h1>
    </>
  );
};

export default Costos;
