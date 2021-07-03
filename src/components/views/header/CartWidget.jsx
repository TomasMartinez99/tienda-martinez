import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = (props) => {
  const { quantity } = useContext(CartContext);

  return (
    <div className="carrito-contenedor">
      <Link to="/cart">
        <div className="contador">
          <p> {quantity} </p>
        </div>
        <i className="fas fa-shopping-bag"></i>
      </Link>
    </div>
  );
};

export default CartWidget;
