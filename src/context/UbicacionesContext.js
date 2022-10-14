import { createContext, useState } from "react";
import { demoUbicaciones } from "../demoUbicaciones";

export const UbicacionesContext = createContext({
  ubicaciones: [],
  setUbicaciones: () => {},
});

export const UbicacionesProvider = ({ children }) => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const value = {
    ubicaciones,
    setUbicaciones,
  };

  return (
    <UbicacionesContext.Provider value={value}>
      {children}
    </UbicacionesContext.Provider>
  );
};
