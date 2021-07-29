import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../components/ItemCount";
import { CartContext } from "../../context/CartContext";

// Render del item
export const Item = ({ smartwatch }) => {
  return (
    <article className="itemDetail col-12">
      {/* Imagen del producto */}
      <div className="imgProduct col-6 col-lg-5">
        <img src={smartwatch.pictureUrl} alt={smartwatch.alt} />
      </div>
      {/* Detalle del producto */}
      <div className="detail col-4 col-lg-7">
        <h3>{smartwatch.title}</h3>
        <h4>${smartwatch.price}</h4>
      </div>
    </article>
  );
};

export const ItemDetail = ({ smartwatch }) => {
  const [visible, setVisible] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const { addItem } = useContext(CartContext);

  return (
    <div className="row">
      <div className="smartwatchesContainer">
        <Item smartwatch={smartwatch} />
        {/* Condición Agregar carrito */}
        <div className="addCart">
          {visible ? (
            <>
              <button className="btn" onClick={() => setVisible(false)}>
                Agregar al carrito
              </button>
              <ItemCount
                stock={smartwatch.stock}
                itemCount={itemCount}
                setItemCount={setItemCount}
              />
            </>
          ) : (
            <div className="cancelarConfirmarContainer">
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
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
