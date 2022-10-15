import React, { useContext } from "react";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import { WiStrongWind, WiCelsius, WiThermometer } from "react-icons/wi";
import { TiLocationOutline } from "react-icons/ti";
import { BsCalendarDate } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import "./UbicacionDisplay.css";

const UbicacionDisplay = () => {
  const { id } = useParams();
  const { ubicaciones } = useContext(UbicacionesContext);

  const tempUbicacion = ubicaciones.filter((ubicacion) => ubicacion.id === id);

  const {
    imagenURL,
    nombre,
    latitud,
    longitud,
    temperatura,
    velocidad,
    fecha,
  } = tempUbicacion[0];

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="card">
              <img
                src={imagenURL}
                className="card-image"
                alt="Imagen Ubicación"
              />
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
                <div className="card-text d-flex justify-content-evenly">
                  Fecha :
                  <p className="d-flex justify-content-evenly">
                    <span className="text-data">{fecha}</span>
                    <BsCalendarDate className="content-icon" />
                  </p>
                </div>
              </div>
              <div className="btn-container">
                <Link className="btn btn-sm mb-3 btn-info" to="/">
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UbicacionDisplay;
