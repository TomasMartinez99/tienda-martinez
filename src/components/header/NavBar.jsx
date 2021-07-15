import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  const samsung = "samsung";
  const apple = "apple";
  const xiaomi = "xiaomi";

  return (
    <header>
      <div className="fixed">
        <nav className="menu">
          {/* Logo tienda */}
          <div className="logo">
            <Link to="/">
              <p>SmartWatches</p>
            </Link>
          </div>

          {/* Buscador */}
          <div className="buscador">
            <input type="text" placeholder="Buscar..."></input>
            <i className="fas fa-search"></i>
          </div>

          {/* Enlaces */}
          <ul className="enlaces">
            <li>
              <NavLink to="/" activeClassName="active">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to={`/category/${samsung}`} activeClassName="active">
                Samsung
              </NavLink>
            </li>
            <li>
              <NavLink to={`/category/${apple}`} activeClassName="active">
                Apple
              </NavLink>
            </li>
            <li>
              <NavLink to={`/category/${xiaomi}`} activeClassName="active">
                Xiaomi
              </NavLink>
            </li>
          </ul>

          {/* Carrito */}
          <CartWidget />

          {/* Btn iniciar sesion */}
          <a href="" className="btn btn-outline-light">
            Iniciar sesión
          </a>
        </nav>
        {/* Buscador 2 (mobile) */}
        <div className="buscador-2">
          <input type="text" placeholder="Buscar..."></input>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
