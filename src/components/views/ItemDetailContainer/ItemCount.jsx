import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ stock }) => {
  const { count, setCount } = useContext(CartContext);

  const incrementar = () => {
    count < stock && setCount(count + 1);
  };

  const decrementar = () => {
    count > 1 && setCount(count - 1);
  };

  return (
    <div className="count">
      <div>
        <button className="btn-menos" onClick={(e) => decrementar()}>
          -
        </button>
        <h2> {count} </h2>
        <button className="btn-mas" onClick={(e) => incrementar()}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
