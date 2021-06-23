import React from "react";
import Item from "./Item";

export const ItemDetail = (props) => {
  const { title, price, pictureUrl, alt } = props;

  return (
    <>
      <div className="row">
        <div className="smartwatches-container">
          <Item title={title} price={price} pictureUrl={pictureUrl} alt={alt} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
