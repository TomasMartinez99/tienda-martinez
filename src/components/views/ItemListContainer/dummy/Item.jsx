import React from "react";
import { Link } from "react-router-dom";

// Componente Render
export const Item = (props) => {
  const itemId = "itemId";

  return (
    <article className="item col-3">
      <img src={props.pictureUrl} alt={props.alt} />
      <h3>{props.title}</h3>
      <h4>${props.price}</h4>
      <a href="#" className="btn btn-outline-primary">
        Agregar al carrito
      </a>
      <Link className="ver-mas" exact to={`/item/${itemId}`}>
        Ver más
      </Link>
    </article>
  );
};

export default Item;
