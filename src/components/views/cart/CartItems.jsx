import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";

export const CartItems = () => {
  const { aggregateItems, setAggregateItems } = useContext(CartContext);
  const { quantity, setQuantity } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  // Hook para calcular el total de los items
  useEffect(() => {
    // Uso del método "reduce"
    const res = aggregateItems.reduce((accumulator, item) => {
      return accumulator + item.smartwatch.itemToShow.price * item.itemCount;
    }, 0);
    setTotal(res);
  }, [aggregateItems]);

  // Función para vaciar carrito
  const clear = () => {
    setAggregateItems([]);
    setQuantity(0);
  };

  return (
    <>
      <div className="cart">
        <h2>Su carrito</h2>
        {aggregateItems.length === 0 ? (
          <h3>No hay artículos agregados al carrito</h3>
        ) : (
          /* <Link to="/">Volver al inicio</Link> */
          // Recorrer y mostrar array con relojes
          <div className="row">
            <div className="cart-detail">
              {/* Recorrer el array con los items agregados al carrito */}
              {aggregateItems.map((smartwatchAndCount) => (
                <CartDetail
                  key={smartwatchAndCount.id}
                  {...smartwatchAndCount}
                />
              ))}
              <div className="clearAndTotal">
                <button className="btn btn-danger" onClick={() => clear()}>
                  Vaciar carrito
                </button>
                <h3 className="total">Total: ${total}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItems;
