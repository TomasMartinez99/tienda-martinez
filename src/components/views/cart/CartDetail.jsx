import React, { useContext } from "react";

export const CartDetail = (props) => {
  const smartwatchAndQuantity = props;

  return (
    <>
      <article className="item col-3">
        <h4>${smartwatchAndQuantity.price}</h4>
      </article>
    </>
  );
};

export default CartDetail;
