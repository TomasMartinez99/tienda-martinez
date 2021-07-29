import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartDetail = (props) => {
  const { aggregateItems, setAggregateItems } = useContext(CartContext);
  const { quantity, setQuantity } = useContext(CartContext);
  const itemCount = props.itemCount;
  const title = props.smartwatch.title;
  const price = props.smartwatch.price;
  const pictureUrl = props.smartwatch.pictureUrl;
  const itemId = props.smartwatch.id;
  const alt = props.smartwatch.alt;

  // Función para eliminar item
  const removeItem = (itemId) => {
    const selectRemoveItem = aggregateItems.find(
      (aggregateItem) => aggregateItem.smartwatch.id === itemId
    );
    setQuantity(quantity - selectRemoveItem.itemCount);
    setAggregateItems(
      aggregateItems.filter((item) => item.smartwatch.id !== itemId)
    );
  };

  return (
    <>
      <div>
        <img src={pictureUrl} alt={alt} />
        <div className="detail">
          <h3>{title}</h3>
          <h4 className="price">{`Precio unitario: $${price}`}</h4>
          <h4>{`Cantidad: ${itemCount}`}</h4>
          <div onClick={() => removeItem(itemId)}>
            <button className="btn btn-outline-danger">Borrar</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartDetail;
