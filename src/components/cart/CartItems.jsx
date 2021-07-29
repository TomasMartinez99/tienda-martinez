import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { Form } from "./Form";

export const CartItems = () => {
  const { aggregateItems } = useContext(CartContext);
  const { clear } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  // Hook para calcular el total de los items
  useEffect(() => {
    // Uso del método "reduce"
    const res = aggregateItems.reduce((accumulator, item) => {
      return accumulator + item.smartwatch.price * item.itemCount;
    }, 0);
    setTotal(res);
  }, [aggregateItems]);

  return (
    <>
      <div className="cart">
        {aggregateItems.length === 0 ? (
          <div className="carritoVacio">
            <h3>No hay artículos agregados al carrito</h3>
            <h4>¡Muchos productos te esperan!</h4>
          </div>
        ) : (
          // Recorrer y mostrar array con relojes
          <div className="row">
            <div className="col-12 col-md-6 itemsDetail">
              <h2>Mi carrito</h2>
              {/* Recorrer el array con los items agregados al carrito */}
              {aggregateItems.map((smartwatchAndCount) => (
                <CartDetail
                  key={smartwatchAndCount.smartwatch.id}
                  {...smartwatchAndCount}
                />
              ))}
              <div className="clearAndTotal">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => clear()}
                >
                  Vaciar carrito
                </button>
                <h3 className="total">Total: ${total}</h3>
              </div>
            </div>

            <section className="col-12 col-md-6 form">
              <div className="userInfo">
                <h2>Mis Datos</h2>
                <Form
                  aggregateItems={aggregateItems}
                  itemsPrice={total}
                  clear={clear}
                />
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItems;
