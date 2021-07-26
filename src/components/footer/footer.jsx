import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-8 col-md-6 nombreTienda">
          <p>©2021 Timeshop - Todos los derechos reservados</p>
        </div>
        <div className="col-4 col-md-6 redes">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
