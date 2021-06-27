import React from "react";

export const CartWidget = (props) => {
  return (
    <div className="carrito-contenedor">
      <div className="contador">
        <p>1</p>
      </div>
      <i className="fas fa-shopping-bag"></i>
    </div>
  );
};

export default CartWidget;
