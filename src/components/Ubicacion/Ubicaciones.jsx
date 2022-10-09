import React from "react";
import Ubicacion from "./Ubicacion";
import imagen1 from "../../assets/sinImagen.svg";

const ubicaciones = [
  {
    id: 1,
    imagenURL: imagen1,
    nombre: "San Salvador de Jujuy",
    latitud: "-24.45",
    longitud: "22.45",
    temperatura: "24",
    velocidad: "35.4",
  },
  {
    id: 2,
    imagenURL: imagen1,
    nombre: "San Pedro",
    latitud: "-24.45",
    longitud: "22.45",
    temperatura: "24",
    velocidad: "35.4",
  },
  {
    id: 3,
    imagenURL: imagen1,
    nombre: "Palpala",
    latitud: "-24.45",
    longitud: "22.45",
    temperatura: "24",
    velocidad: "35.4",
  },
  {
    id: 4,
    imagenURL: imagen1,
    nombre: "Ledesma",
    latitud: "-24.45",
    longitud: "22.45",
    temperatura: "24",
    velocidad: "35.4",
  },
  {
    id: 5,
    imagenURL: imagen1,
    nombre: "Tilcara",
    latitud: "-24.45",
    longitud: "22.45",
    temperatura: "24",
    velocidad: "35.4",
  },
  {
    id: 6,
    imagenURL: imagen1,
    nombre: "El Carmen",
    latitud: "-24.45",
    longitud: "22.45",
    temperatura: "24",
    velocidad: "35.4",
  },
];

const Ubicaciones = () => {
  return (
    <>
      <h2>Mis Ubicaciones</h2>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row g-xs-1 g-4">
          {ubicaciones.map((ubicacion) => (
              <Ubicacion key={ubicacion.id} ubicacion={ubicacion}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ubicaciones;

