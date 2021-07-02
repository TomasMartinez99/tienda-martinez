import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemCount from "../ItemCount";
import { CartContext } from "../../../context/CartContext";
import Smartwatches from "../../../services/Smartwatches";

export const ItemDetail = (smartwatch) => {
  const [visible, setVisible] = useState(true);
  const { addItem } = useContext(CartContext);

  return (
    <div className="row">
      <div className="smartwatches-container">
        <Item {...smartwatch} />
        {/* Condición Agregar carrito */}
        <div className="addCart">
          {visible ? (
            <>
              <button className="btn" onClick={() => setVisible(false)}>
                Agregar al carrito
              </button>
              <ItemCount stock={5} />
            </>
          ) : (
            <div className="cancelar-confirmar-container">
              <button className="btn" onClick={() => setVisible(true)}>
                Cancelar
              </button>
              <Link
                className="btn btn-confirmar"
                onClick={() => addItem(smartwatch)}
                to="/cart"
              >
                Confirmar
              </Link>
            </div>
          )}

          {/* ARREGLAR */}
          {/* <Link to="/">Volver atrás</Link> */}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
