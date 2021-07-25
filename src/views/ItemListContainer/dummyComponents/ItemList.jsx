import React from "react";
import Item from "./Item";

// Utilizo Destructuring en la línea 5
export const ItemList = ({ watchesToShow }) => {
  return (
    // Maps (Se usa para recorrer un array)
    <>
      {watchesToShow.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        // Recorrer y mostrar array con relojes
        <div className="row">
          <h2 className="tituloInicio">Elegí tu próximo reloj inteligente</h2>

          <div className="smartwatchesContainer">
            {watchesToShow.map((smartwatch, i) => (
              <Item key={i} {...smartwatch} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;
