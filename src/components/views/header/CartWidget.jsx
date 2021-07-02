import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = (props) => {
  const { quantity } = useContext(CartContext);

  return (
    <div className="carrito-contenedor">
      <div className="contador">
        <p> {quantity} </p>
      </div>
      <i className="fas fa-shopping-bag"></i>
    </div>
  );
};

export default CartWidget;
