import React, { useState } from "react";

const Transformador = () => {
  const [secs, setTiempo] = useState(0);

  const Convertir = () => {
    
    const horas = Math.floor(secs / 3600);
    const minutos = Math.floor((secs % 3600) / 60);
    const segundos = secs % 60;


    console.log("Horas: " +horas+  " Minutos: " + minutos+ " Segundos: "+segundos);
  };

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10); 
    setTiempo(inputValue);
    Convertir(inputValue); 
  };

  return (
    <>
    <div>

    <h1>segundos</h1>
      <input type="number" value={secs} onChange={handleInputChange} />
      <button onClick={Convertir}>Convertir</button>


    </div>

      
    </>
  );
};

export default Transformador;