import React from "react";
import Item from "./Item";

export const ItemDetail = (props) => {
  const smartwatches = props;

  return (
    <>
      <div className="row">
        <div className="smartwatches-container">
          <Item {...smartwatches} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
