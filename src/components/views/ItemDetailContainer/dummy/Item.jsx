import React from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

// Componente Render
export const Item = (props) => {
  return (
    <>
      <article className="itemDetail col-12">
        {/* Imagen del producto */}
        <div className="img-product col-5">
          <img src={props.pictureUrl} alt={props.alt} />
        </div>
        {/* Detalle del producto */}
        <div className="detail-product col-7">
          <h3>{props.title}</h3>
          <h4>${props.price}</h4>
          <ItemCount stock={5} initial={1} />
        </div>
      </article>
      <div>
        <Link exact to="/">
          Volver al inicio
        </Link>
      </div>
    </>
  );
};

export default Item;
