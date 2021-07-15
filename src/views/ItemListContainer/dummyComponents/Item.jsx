import React from "react";
import { Link } from "react-router-dom";

// Componente Render
export const Item = (props) => {
  const smartwatch = props;

  return (
    <article className="item col-3">
      <img src={smartwatch.pictureUrl} alt={smartwatch.alt} />
      <h3>{smartwatch.title}</h3>
      <h4>${smartwatch.price}</h4>
      <Link className="ver-mas" to={`/item/${smartwatch.id}`}>
        Ver más
      </Link>
    </article>
  );
};

export default Item;
