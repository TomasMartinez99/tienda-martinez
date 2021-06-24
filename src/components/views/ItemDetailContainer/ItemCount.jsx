import React, { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    count < stock && setCount(count + 1);
  };

  const decrementar = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <>
      <div className="agregarCarrito">
        <div>
          <button className="btn-menos" onClick={(e) => decrementar()}>
            -
          </button>
          <h2>{count}</h2>
          <button className="btn-mas" onClick={(e) => onAdd()}>
            +
          </button>
        </div>
        <p>Agregar al carrito</p>
      </div>
    </>
  );
};

export default ItemCount;
