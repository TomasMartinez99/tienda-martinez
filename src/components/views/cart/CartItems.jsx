import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";

export const CartItems = (props) => {
  const { aggregateItems, setAggregateItems } = useContext(CartContext);

  return (
    <>
      <h2>Productos agregados</h2>

      {aggregateItems.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        // Recorrer y mostrar array con relojes
        <div className="row">
          <div className="smartwatches-container">
            {aggregateItems.map((smartwatchAndQuantity) => (
              <CartDetail
                key={smartwatchAndQuantity.id}
                {...smartwatchAndQuantity}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
