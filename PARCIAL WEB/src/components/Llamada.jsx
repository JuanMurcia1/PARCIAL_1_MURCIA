import React, { useState } from "react";

const CalculadoraLlamada = () => {
  const [tiempoLlamada, setTiempoLlamada] = useState(0);
  const [costoTotalLlamada, setCostoTotalLlamada] = useState(0);

  const calcularCostoLlamada = () => {
    let costoLlamada = 0;

    if (tiempoLlamada < 3) {
      costoLlamada = 100;
    } else {
      costoLlamada = 100 + (tiempoLlamada - 3) * 50;
    }

    setCostoTotalLlamada(costoLlamada);
    console.log(`Duración de la llamada: ${tiempoLlamada} minutos`);
  console.log(`Costo total de la llamada: ${costoLlamada} pesos`);
  };

  const handleTiempoChange = (e) => {
    const tiempo = parseInt(e.target.value, 10);
    setTiempoLlamada(tiempo);
    calcularCostoLlamada();
   
  };

  

  

  return (
    <div>
      <h2>Costo de Llamada</h2>
      <label>
        Duración de la llamada:
        <input
          type="number"
          value={tiempoLlamada}
          onChange={handleTiempoChange}
        />
      </label>
      <p>Costo total de la llamada: {costoTotalLlamada}</p>
      <button onClick={calcularCostoLlamada}>Calcular Costo</button>
    </div>
  );
};

export default CalculadoraLlamada;