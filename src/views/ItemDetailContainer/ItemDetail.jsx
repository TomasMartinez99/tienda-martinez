import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../components/ItemCount";
import { CartContext } from "../../context/CartContext";

// Render del reloj
export const Item = (props) => {
  const itemRender = props.itemToShow;

  return (
    <article className="itemDetail col-12">
      {/* Imagen del producto */}
      <div className="imgProduct col-5">
        <img src={itemRender.pictureUrl} alt={itemRender.alt} />
      </div>
      {/* Detalle del producto */}
      <div className="col-7">
        <h3>{itemRender.title}</h3>
        <h4>${itemRender.price}</h4>
      </div>
    </article>
  );
};

export const ItemDetail = (props) => {
  const smartwatch = props;
  const [visible, setVisible] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const { addItem } = useContext(CartContext);

  return (
    <div className="row">
      <div className="smartwatchesContainer">
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
