import React, { useContext } from 'react';
import { DrinksContext } from './drinks';

const Tarjetas = () => {
  const { piscola, espumante, apperol, ramazotti } = useContext(DrinksContext);

  return (
    <>
    <h2 className='lista-title'>Lista de compras:</h2>
    <div className="tarjeta-piscola">
      <h1 className='card-title'>Piscola</h1>
      <img src={piscola.img} alt="" width="200" />
      <p className='vasos'>Vasos: {piscola.vasos}</p>
      <p className='botellas'>Botellas de Pisco: {piscola.botellasPisco}</p>
      <p className="marca">marca: {piscola.marca}</p>
    </div>
    <div className="tarjeta-piscola">
    <h1>Espumante</h1>
    <img src={espumante.img} alt="" width='200' />
    <p>copas: {espumante.copasEspumante}</p>
    <p>Botellas de espumante: {espumante.botellasEspumante}</p>
    <p className="marca">marca: {espumante.marca}</p>
  </div>
  <div className="tarjeta-piscola">
    <h1>Apperol</h1>
    <img src={apperol.img} alt="" width='200' />
    <p>copas: {apperol.copasApperol}</p>
    <p>Botellas de apperol: {apperol.botellasAguaConGas}</p>
    <p>botellas de agua con gas: {apperol.botellasAguaConGas}</p>
    <p>naranjas: {apperol.naranjas}</p>
    <p className="marca">marca: {apperol.marca}</p>
  </div>
  <div className="tarjeta-piscola">
    <h1>Ramazotti violetto</h1>
    <img src={ramazotti.img} alt="" width='200' />
    <p>copas: {ramazotti.copasRamazotti}</p>
    <p>Botellas de Ramazotti: {ramazotti.botellasRamazotti}</p>
    <p>botellas de agua con gas: {ramazotti.botellasAguaConGas}</p>
    <p>arandanos: {ramazotti.arandanos}</p>
    <p className="marca">marca: {ramazotti.marca}</p>
  </div>
  </>
  );
};

export default Tarjetas;
