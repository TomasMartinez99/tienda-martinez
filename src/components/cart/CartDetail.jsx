import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartDetail = (props) => {
  const { aggregateItems, setAggregateItems } = useContext(CartContext);
  const { quantity, setQuantity } = useContext(CartContext);
  /* const [subTotal, setSubTotal] = useState(); */
  const itemCount = props.itemCount;
  const title = props.smartwatch.itemToShow.title;
  const price = props.smartwatch.itemToShow.price;
  const pictureUrl = props.smartwatch.itemToShow.pictureUrl;
  const itemId = props.smartwatch.itemToShow.id;
  const alt = props.smartwatch.itemToShow.alt;

  // Función para eliminar item
  const removeItem = (itemId) => {
    const selectRemoveItem = aggregateItems.find(
      (aggregateItem) => aggregateItem.smartwatch.itemToShow.id === itemId
    );
    /* setSubTotal(subTotal - selectRemoveItem.price * selectRemoveItem.quantity); */
    setQuantity(quantity - selectRemoveItem.itemCount);
    setAggregateItems(
      aggregateItems.filter((item) => item.smartwatch.itemToShow.id !== itemId)
    );
  };

  return (
    <>
      <div>
        <img src={pictureUrl} alt={alt} />
        <div className="detail">
          <h3>{title}</h3>
          <h4 className="price">{`$${price}`}</h4>
          <h4>{`Cantidad ${itemCount}`}</h4>
          <div onClick={() => removeItem(itemId)}>
            <button className="btn btn-danger">Borrar</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartDetail;
