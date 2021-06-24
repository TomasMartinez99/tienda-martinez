import React from "react";
import Item from "./Item";

export const ItemDetail = (props) => {
  const smartwatch = props;

  return (
    <>
      <div className="row">
        <div className="smartwatches-container">
          <Item {...smartwatch} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
