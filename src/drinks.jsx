import React, { createContext, useState } from 'react';

// Crear el contexto
const DrinksContext = createContext();

// Crear el proveedor del contexto
const DrinksProvider = ({ children }) => {
  const [personas, setPersonas] = useState('')

  const piscola = {
    piscolas: personas,
    vasos: Math.ceil((personas/4))*3,
    botellasPisco: Math.ceil(((personas/4)*3)/ 4),
    botellasCocacola: Math.ceil(((personas/4)*3)/ 4),
    img: 'https://media-front.elmostrador.cl/2021/02/Piscola-2.jpg',
    marca: 'alto del carmen/ mistral 40°'
    };

    const espumante = {
        espumantes: personas,
        copasEspumante: personas*3,
        botellasEspumante: Math.ceil((personas*3)/4),
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8AKBpmqJWnkbuh5B3TnPeo7IFnknbjwTMw&s',
        marca: 'por definir'
        };

        const apperol = {
            apperol: personas,
            copasApperol: Math.ceil((personas/2))*3,
            botellasApperol: (Math.ceil((personas/2))*3)/5,
            botellasAguaConGas: (Math.ceil((personas/2))*3)/5,
            naranjas: 10,
            img: 'https://png.pngtree.com/thumb_back/fh260/background/20220526/pngtree-glass-of-aperol-spritz-cocktail-cocktail-wine-dark-photo-image_36754550.jpg',
            marca: 'apperol'
            };

            const ramazotti = {
                ramazzoti: personas,
                copasRamazotti: Math.ceil((personas/3))*2,
                botellasRamazotti: (Math.ceil((personas/3))*2)/5,
                botellasAguaConGas: Math.floor((Math.ceil((personas/2))*3)/8),
                arandanos: '1 bolsa',
                img: 'https://www.kitchencenter.cl/cdn/shop/files/ramazzoti_violeto-compressed_228ae963-4e09-41fd-b42f-0c4210459ed9.jpg?v=1711390268',
                marca: 'ramazotti violetto'
                };

                const hielo = {
                    bolsas: (Math.ceil(((personas/2)*3)/3)),
                    img: 'https://img.freepik.com/fotos-premium/cubos-hielo-sobre-fondo-negro-espacio-copiar_1040193-1778.jpg',                    
                    };

  return (
    <DrinksContext.Provider value={{ personas, setPersonas, piscola, espumante, apperol, ramazotti, hielo }}>
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksContext, DrinksProvider };