import React from "react";

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
        <button className="btnMenos" onClick={(e) => decrementar()}>
          -
        </button>
        <h2> {itemCount} </h2>
        <button className="btnMas" onClick={(e) => incrementar()}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
