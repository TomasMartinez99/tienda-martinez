import React from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";

// Componente Render
export const Item = (props) => {
  const itemRender = props.itemToShow;

  return (
    <>
      <article className="itemDetail col-12">
        {/* Imagen del producto */}
        <div className="img-product col-5">
          <img src={itemRender.pictureUrl} alt={itemRender.alt} />
        </div>
        {/* Detalle del producto */}
        <div className="detail-product col-7">
          <h3>{itemRender.title}</h3>
          <h4>${itemRender.price}</h4>
          <ItemCount stock={5} initial={1} />
        </div>
      </article>
      <div>
        <Link to="/">Volver al inicio</Link>
      </div>
    </>
  );
};

export default Item;
