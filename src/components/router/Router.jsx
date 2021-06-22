import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ItemListContainer } from "../views/ItemListContainer/ItemListContainer";

export const Router = () => {
  return (
    <Switch>
        {/* Inicio */}
        {/* <Route exact path="/" component={ItemListContainer} /> */}
        <Route exact path="/">
          <ItemListContainer />
        </Route>

        {/* Marcas */}
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>

        {/* Detalle producto */}
        <Route exact path="/item/:id">
          <h3>Detalle producto</h3>
          {/* <ItemDetailContainer /> */}
        </Route>

        {/* Página no encontrada */}
        <Route path="/">
          <h2>Error, página no encontrada</h2>
          <Link exact to="/">
            Volver al inicio
          </Link>
        </Route>
      </Switch>
  );
};

export default Router;
