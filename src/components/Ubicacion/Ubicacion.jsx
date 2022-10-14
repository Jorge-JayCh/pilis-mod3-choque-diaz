import React, { useContext } from "react";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import { WiThermometer, WiCelsius } from "react-icons/wi";
import "./Ubicacion.css";

const Ubicacion = ({ ubicacion }) => {
  const { id, imagenURL, nombre, latitud, longitud, temperatura, velocidad } =
    ubicacion;

  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);

  const handleEliminar = () => {
    const updateUbicaciones = ubicaciones.filter(
      (ubicacion) => ubicacion.id !== id
    );
    setUbicaciones(updateUbicaciones);
    localStorage.setItem("listUbicaciones", JSON.stringify(updateUbicaciones));
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3" key={ubicacion.id}>
      <div className="card">
        <img src={imagenURL} className="card-image" alt="Imagen Ubicación" />
        <div className="card-body text-center p-2">
          <h4 className="card-title title-bg">{nombre}</h4>
          <p className="card-text">{latitud}</p>
          <p className="card-text">{longitud}</p>
          <div className="card-text d-flex justify-content-evenly">
            Temperatura :
            <p>
              {temperatura}
              <WiCelsius className="celsius" />
              <WiThermometer className="temp" />
            </p>
          </div>
          <p className="card-text">{velocidad}</p>
          {ubicaciones.length !== 0 ? (
            <div className="btn-container">
              <a href="#!" className="btn btn-sm btn-info btn-space">
                Ver mas
              </a>
              <div
                className="btn btn-sm btn-danger btn-space"
                onClick={handleEliminar}
              >
                Eliminar
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
