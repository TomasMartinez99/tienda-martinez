import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

// Componente Render
export const Item = (props) => {
  const smartwatch = props;
  const [itemCount, setItemCount] = useState(1);
  const { addItem } = useContext(CartContext);

  return (
    <article className="item col-3">
      <img src={smartwatch.pictureUrl} alt={smartwatch.alt} />
      <h3>{smartwatch.title}</h3>
      <h4>${smartwatch.price}</h4>
      <Link
        className="btn btn-outline-primary"
        onClick={() => addItem(smartwatch, itemCount)}
      >
        Agregar al carrito
      </Link>
      <Link className="ver-mas" to={`/item/${smartwatch.id}`}>
        Ver más
      </Link>
    </article>
  );
};

export default Item;
