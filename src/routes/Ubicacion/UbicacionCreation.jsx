import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import imagen1 from "../../assets/sinImagen.svg";
import "./UbicacionCreation.css";
import { getUbicacion } from "../../service";

const UbicacionCreation = () => {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);
  // const [nombre, setNombre] = useState("");
  // const [latitud, setLatitud] = useState("");
  // const [longitud, setLongitud] = useState("");
  // const [ temperatura, setTemperatura ] = useState(null);
  // const [ velocidad, setVelocidad ] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { nombre, latitud, longitud } = data;
    const response = await getUbicacion(latitud, longitud);
    const nuevaUbicacion = {
      imagenURL: imagen1,
      nombre,
      latitud,
      longitud,
      temperatura: response.current_weather.temperature,
      velocidad: response.current_weather.windspeed,
    };
    nuevaUbicacion.id = uuidv4();
    const listUbicaciones = [...ubicaciones, nuevaUbicacion];
    setUbicaciones(listUbicaciones);
    localStorage.setItem("listUbicaciones", JSON.stringify(listUbicaciones));
    navigate("/");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Campos FORM : ...");
  //   const response = await getUbicacion(latitud,longitud)
  //   const nuevaUbicacion = {
  //     imagenURL: imagen1,
  //     nombre,
  //     latitud,
  //     longitud,
  //     temperatura : response.current_weather.temperature,
  //     velocidad : response.current_weather.windspeed,
  //   }
  //   nuevaUbicacion.id = uuidv4();
  //   const listUbicaciones = [...ubicaciones, nuevaUbicacion];
  //   setUbicaciones(listUbicaciones);
  //   localStorage.setItem('listUbicaciones', JSON.stringify(listUbicaciones));
  //   navigate("/");
  // };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="row">
        <form className="bg-secondary my-3 pt-4 px-4" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="">Crea una Nueva Ubicación</h3>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Nombre de la Ubicación"
              // value={nombre}
              // onChange={(e) => setNombre(e.target.value)}
              {...register('nombre', {
                required: 'Debe ingresar un nombre válido'
              })}
            />
            <p>{errors.nombre?.message}</p>
          </div>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Latitud ( ej : -24.18 )"
              // value={latitud}
              // onChange={(e) => setLatitud(e.target.value)}
              {...register('latitud', {
                required: 'Debe ingresar una latitud válida'
              })}
            />
            <p>{errors.latitud?.message}</p>
          </div>
          <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="Longitud ( ej : -65.33 )"
              // value={longitud}
              // onChange={(e) => setLongitud(e.target.value)}
              {...register('longitud', {
                required: 'Debe ingresar una longitud válida'
              })}
            />
            <p>{errors.longitud?.message}</p>
          </div>
          <div className="mb-4 d-flex justify-content-center">
            <button type="submit" className="btn btn-info">
              Crear Ubicacion
            </button>
          </div>
          {/* <div className="mb-4">
            <input
              className="form-control"
              type="text"
              placeholder="URL Imagen"
              {...register("nombre", {
                required: "Debe ingresar una URL válida",
              })}
            />
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default UbicacionCreation;
