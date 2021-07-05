import React, { useState, useEffect } from "react";

export const CartDetail = (props) => {
  const smartwatchAndCount = props;
  const title = smartwatchAndCount.smartwatch.title;
  const price = smartwatchAndCount.smartwatch.price;
  const quantity = smartwatchAndCount.itemCount;
  const [sum, setSum] = useState(0);

  console.log(sum);
  useEffect(() => {
    setSum(sum + price);
  }, []);

  return (
    <>
      <article className="item col-3">
        <h3>{title}</h3>
        <h3>{price}</h3>
        <h4>{`Cantidad ${quantity}`}</h4>
        <hr />
      </article>
      <h4>{`Total $ ${sum}`}</h4>
    </>
  );
};

export default CartDetail;
