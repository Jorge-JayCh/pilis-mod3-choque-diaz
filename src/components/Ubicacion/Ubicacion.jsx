import React from "react";
import "./Ubicacion.css";

const Ubicacion = ({ ubicacion }) => {
  const { id, imagenURL, nombre, latitud, longitud, temperatura, velocidad } =
    ubicacion;
  return (
    <div className="col-sm-6 col-md-4 col-lg-3" key={ubicacion.id}>
      <div className="card">
        <img src={imagenURL} className="card-image"/>
        <div className="card-body text-center">
          <h4 className="card-title">{nombre}</h4>
          <p className="card-text">{latitud}</p>
          <p className="card-text">{longitud}</p>
          <p className="card-text">{temperatura}</p>
          <p className="card-text"></p>
          <p className="card-text">{velocidad}</p>
          <div className="btn-container">
            <a href="#!" className="btn btn-sm btn-dark btn-space">
              Ver mas
            </a>
            <a href="#!" className="btn btn-sm btn-danger btn-space">
              Eliminar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
