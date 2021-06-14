import React, { useState, useEffect } from "react";

// Render
export const Item = (props) => {
  return (
    <article className="col-3">
      <img src={props.pictureUrl} alt={props.alt} />
      <h3>{props.title}</h3>
      <h4>${props.price}</h4>
      <a href="#" className="btn btn-outline-primary">
        Agregar al carrito
      </a>
    </article>
  );
};

export default Item;
