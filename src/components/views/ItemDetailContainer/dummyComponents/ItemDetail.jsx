import React from "react";
import Item from "./Item";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = (props) => {
  const smartwatches = props;
  const [visible, setVisible] = useState(true);

  return (
    <div className="row">
      <div className="smartwatches-container">
        <Item {...smartwatches} />

        {/* Condición Agregar carrito */}
        <div className="addCart">
          {visible ? (
            <>
              <button className="btn" onClick={() => setVisible(false)}>
                Agregar al carrito
              </button>
              <ItemCount stock={5} initial={1} />
            </>
          ) : (
            <div className="cancelar-confirmar-container">
              <button className="btn" onClick={() => setVisible(true)}>
                Cancelar
              </button>
              <Link className="btn btn-confirmar" to="/cart">
                Confirmar
              </Link>
            </div>
          )}
          {/* ARREGLAR */}
          {/* <h6>Llevás {count} productos en el carrito</h6> */}

          {/* ARREGLAR */}
          {/* <Link to="/">Volver atrás</Link> */}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
