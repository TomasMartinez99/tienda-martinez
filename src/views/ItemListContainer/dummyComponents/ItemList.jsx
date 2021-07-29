import { React } from "react";
import { Item } from "./Item";
import { Loader } from "../../../components/loader/Loader";

// Utilizo Destructuring en la línea 5
export const ItemList = ({ watchesToShow }) => {
  return (
    // Maps (Se usa para recorrer un array)
    <>
      {watchesToShow.length === 0 ? (
        <div className="LoaderContainer">
          <Loader />
        </div>
      ) : (
        // Recorrer y mostrar array con relojes
        <div className="row">
          <h2 className="tituloInicio">Elegí tu próximo reloj inteligente</h2>

          <div className="smartwatchesContainer">
            {watchesToShow.map((smartwatch, i) => (
              <Item key={i} smartwatch={smartwatch} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;
