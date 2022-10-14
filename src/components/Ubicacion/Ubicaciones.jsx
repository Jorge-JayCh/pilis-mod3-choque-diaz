import React, { useContext } from "react";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import Ubicacion from "./Ubicacion";

const Ubicaciones = ({ listUbicaciones }) => {
  const { ubicaciones } = useContext(UbicacionesContext);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row w-100 my-0 g-xs-1 g-2">
          <h2 className="my-3 text-center">
            {ubicaciones.length === 0
              ? "Crea tus propias Ubicaciones"
              : "Mis Ubicaciones"}
          </h2>
          {listUbicaciones.map((ubicacion) => (
            <Ubicacion key={ubicacion.id} ubicacion={ubicacion} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ubicaciones;
