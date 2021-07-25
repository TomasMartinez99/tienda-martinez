import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-6 nombre-tienda">
          <p>©2021 Timeshop - Todos los derechos reservados</p>
        </div>
        <div className="col-6 redes">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
