import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemCount from "../ItemCount";
import { CartContext } from "../../../context/CartContext";

export const ItemDetail = (props) => {
  const smartwatch = props;
  const [visible, setVisible] = useState(true);
  const [itemCount, setItemCount] = useState(0);
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
              <ItemCount
                stock={5}
                itemCount={itemCount}
                setItemCount={setItemCount}
              />
            </>
          ) : (
            <div className="cancelar-confirmar-container">
              <button className="btn" onClick={() => setVisible(true)}>
                Cancelar
              </button>
              <Link
                className="btn btn-confirmar"
                onClick={() => addItem(smartwatch, itemCount)}
                to="/cart"
              >
                Confirmar compra
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
