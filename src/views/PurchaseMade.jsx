import { React } from "react";
import { useParams } from "react-router-dom";
import { EmptyPage } from "./EmptyPage";

export const PurchaseMade = () => {
  const { orderId } = useParams();

  return (
    <div>
      <EmptyPage
        className="purchaseMade"
        altText="compra exitosa"
        h1="¡Gracias por Tu Compra!"
        link="/"
        extraInfo={`El código de tu pedido es ${orderId}, pronto recibirás un mail confirmando el envío.`}
        btnText="Volver al inicio"
      />
    </div>
  );
};
