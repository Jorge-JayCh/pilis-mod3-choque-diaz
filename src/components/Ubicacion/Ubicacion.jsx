import React, { useContext } from "react";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import "./Ubicacion.css";
import { WiStrongWind, WiCelsius, WiThermometer } from "react-icons/wi";
import { TiLocationOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
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
          <div className="card-text d-flex justify-content-evenly align-content-center">
            Latitud :
            <p className="d-flex justify-content-evenly">
              <span className="text-data">{latitud}</span>
              <TiLocationOutline className="content-icon" />
            </p>
          </div>
          <div className="card-text d-flex justify-content-evenly align-content-center">
            Longitud :
            <p className="d-flex justify-content-evenly">
              <span className="text-data">{longitud}</span>
              <TiLocationOutline className="content-icon" />
            </p>
          </div>
          <div className="card-text d-flex justify-content-evenly align-content-center">
            Temperatura :
            <p>
              <span className="text-data">{temperatura}</span>
              <WiCelsius className="content-temp" />
              <WiThermometer className="content-icon" />
            </p>
          </div>
          <div className="card-text d-flex justify-content-evenly">
            {`Vel. Viento (Km/h) :`}
            <p className="d-flex justify-content-evenly">
              <span className="text-data">{velocidad}</span>
              <WiStrongWind className="content-icon" />
            </p>
          </div>

          {ubicaciones.length !== 0 ? (
            <div className="btn-container">
              <Link className="btn btn-sm btn-info btn-space" to={`/ubicacion/${id}`}>
                Ver más
              </Link>
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
