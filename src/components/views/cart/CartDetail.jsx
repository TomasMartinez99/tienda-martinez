import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartDetail = (props) => {
  const { aggregateItems, setAggregateItems } = useContext(CartContext);
  const title = props.smartwatch.itemToShow.title;
  const price = props.smartwatch.itemToShow.price;
  const pictureUrl = props.smartwatch.itemToShow.pictureUrl;
  const alt = props.smartwatch.itemToShow.alt;
  const quantity = props.itemCount;

  /* const idArray = aggregateItems.find((element) => {
    return element === smartwatchId;
  }); */

  console.log(aggregateItems);

  return (
    <>
      <div>
        <img src={pictureUrl} alt={alt} />
        <div className="detail">
          <h3>{title}</h3>
          <h4 className="price">{`$${price}`}</h4>
          <h4>{`Cantidad ${quantity}`}</h4>
          {/* <div onClick={() => removeProducto()}>
            <button>Borrar</button>
          </div> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartDetail;
