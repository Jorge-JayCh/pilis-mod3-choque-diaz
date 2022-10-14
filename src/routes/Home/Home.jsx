import { useContext, useEffect, useState } from "react";
import Ubicaciones from "../../components/Ubicacion/Ubicaciones";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import { demoUbicaciones } from "../../demoUbicaciones";

import "./Home.css";
const Home = () => {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);

  const loadUbicaciones = () => {
    const ubicacionesStored = JSON.parse(localStorage.getItem("listUbicaciones")) || [];
    setUbicaciones(ubicacionesStored);
  };

  useEffect(() => {
    loadUbicaciones();
  }, []);

  return (
    <>
      <Ubicaciones listUbicaciones={ubicaciones.length===0?demoUbicaciones:ubicaciones} />
    </>
  );
};

export default Home;
