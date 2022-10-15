import { Link, Outlet } from "react-router-dom";
import logoClima from "../../assets/logo-clima.png";
import { GrAddCircle } from "react-icons/gr";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-content" to="/">
          <div className="logo-container">
            <img src={logoClima} alt="Logo" className="logo" />
          </div>
          <h2 className="logo-text">
            <span>Ubicación</span>
            <span>Clima</span>
            <span>App</span>
          </h2>
        </Link>
        {/* <h1
          className="d-flex align-items-center"
        >Aquí va el Buscador</h1> */}
        <div className="nav-links-container">
          {/* {currentUser ? ( */}
          {true ? (
            <Link className="nav-link" to="/ubicacion/create">
              <GrAddCircle />
              <span className="text-link">Nueva Ubicación</span>
            </Link>
          ) : (
            <span className="nav-link">Nueva Ubicación</span>
          )}

          {/* {currentUser ? (
          {!true ? (
            <span
              className="nav-link"
              // onClick={handleSignOut}
            >
              Cerrar Sesión
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/login">
              Iniciar Sesión
            </Link>
          )} */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
