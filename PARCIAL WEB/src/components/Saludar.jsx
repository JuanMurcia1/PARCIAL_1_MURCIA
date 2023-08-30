import React, { useState } from "react";

const Saludos = () => {
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [mensajeSaludo, setMensajeSaludo] = useState("");

  const determinarSaludo = () => {
    const horaNum = parseInt(hora, 10);

    if (horaNum >= 0 && horaNum < 12) {
      setMensajeSaludo(`buenos dias, ${nombre}`);
    } else if (horaNum >= 12 && horaNum < 18) {
      setMensajeSaludo(`buenas tardes, ${nombre}`);
    } else {
      setMensajeSaludo(`buenas noches, ${nombre}`);
    }
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleHoraChange = (e) => {
    setHora(e.target.value);
  };

  return (
    <div>
      <h2>Saludo Ajegun la Hora</h2>
      
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
        />
      
      <label>
        Hora:
        <input
          type="number"
          value={hora}
          onChange={handleHoraChange}
        />
      </label>
      <button onClick={determinarSaludo}>Obtener Saludo</button>
      <p>{mensajeSaludo}</p>
    </div>
  );
};

export default Saludos;