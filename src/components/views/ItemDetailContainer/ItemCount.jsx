import React, { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    count < stock && setCount(count + 1);
  };

  const decrementar = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="count">
      <div>
        <button className="btn-menos" onClick={(e) => decrementar()}>
          -
        </button>
        <h2>{count}</h2>
        <button className="btn-mas" onClick={(e) => incrementar()}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
