import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ItemListContainer } from "../views/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../views/ItemDetailContainer/ItemDetailContainer";
import { CartItems } from "../components/cart/CartItems";
import { PurchaseMade } from "../views/PurchaseMade";

export const Router = () => {
  return (
    <Switch>
      {/* Inicio */}
      <Route path="/" component={ItemListContainer} />

      {/* Marcas */}
      <Route exact path="/category/:categoryId" component={ItemListContainer} />

      {/* Detalle producto */}
      <Route exact path="/item/:itemId" component={ItemDetailContainer} />

      {/* Carrito con items */}
      <Route exact path="/cart" component={CartItems} />

      {/* Orden realizada */}
      <Route path="/purchaseMade/:orderId">
        <PurchaseMade />
      </Route>

      {/* Página no encontrada */}
      <Route path="/">
        <h2>Error, página no encontrada</h2>
        <Link to="/">Volver al inicio</Link>
      </Route>
    </Switch>
  );
};

export default Router;
