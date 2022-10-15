import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import imagen1 from "../../assets/sinImagen.svg";
import "./UbicacionCreation.css";
import { getUbicacion } from "../../service";

const UbicacionCreation = () => {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const { nombre, imagenURL, latitud, longitud } = data;
    const response = await getUbicacion(latitud, longitud);
    const nuevaUbicacion = {
      imagenURL: imagenURL || imagen1,
      nombre,
      latitud,
      longitud,
      temperatura: response.current_weather.temperature,
      velocidad: response.current_weather.windspeed,
      fecha: response.current_weather.time,
    };
    console.log(response.current_weather);
    nuevaUbicacion.id = uuidv4();
    const listUbicaciones = [...ubicaciones, nuevaUbicacion];
    setUbicaciones(listUbicaciones);
    localStorage.setItem("listUbicaciones", JSON.stringify(listUbicaciones));
    navigate("/");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="row">
        <form
          className="bg-secondary my-3 pt-4 px-4 cb-radius"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="">Crea una Nueva Ubicación</h3>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Nombre de la Ubicación"
              {...register("nombre", {
                required: "Debe ingresar un nombre válido",
              })}
            />
            <p>{errors.nombre?.message}</p>
          </div>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="URL Imagen"
              {...register("imagenURL", {
                required: "Debe ingresar un URL de imagen válido",
              })}
            />
            <p>{errors.imagenURL?.message}</p>
          </div>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Latitud ( ej : -24.18 )"
              {...register("latitud", {
                required: "Debe ingresar una latitud válida",
              })}
            />
            <p>{errors.latitud?.message}</p>
          </div>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Longitud ( ej : -65.33 )"
              {...register("longitud", {
                required: "Debe ingresar una longitud válida",
              })}
            />
            <p>{errors.longitud?.message}</p>
          </div>
          <div className="btn-container">
            <Link className="btn btn-sm mb-3 btn-info btn-space" to="/">
              Cancelar
            </Link>
            <button type="submit" className="btn btn-sm mb-3 btn-success btn-space">
              Crear Ubicacion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UbicacionCreation;
