import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ stock, itemCount, setItemCount }) => {
  const incrementar = () => {
    itemCount < stock && setItemCount(itemCount + 1);
  };

  const decrementar = () => {
    itemCount > 1 && setItemCount(itemCount - 1);
  };

  return (
    <div className="count">
      <div>
        <button className="btn-menos" onClick={(e) => decrementar()}>
          -
        </button>
        <h2> {itemCount} </h2>
        <button className="btn-mas" onClick={(e) => incrementar()}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
