import React from "react";

function Catalog() {
  const services = [
    { name: "Sembrado Ecológico", description: "Técnicas avanzadas para cultivos sostenibles." },
    { name: "Riego Automático", description: "Optimización del uso de agua en hectáreas." },
    { name: "Cuidado del Medio Ambiente", description: "Iniciativas ecológicas para el futuro." },
    { name: "Procesamiento de Residuos", description: "Gestión eficiente de desechos biológicos." },
  ];

  return (
    <div className="catalog">
      <h2>Nuestros Servicios</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
