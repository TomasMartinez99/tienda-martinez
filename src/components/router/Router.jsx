import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ItemListContainer } from "../views/ItemListContainer/ItemListContainer";
/* import { ItemDetailContainer } from "../views/ItemDetailContainer/ItemDetailContainer"; */
import { NavBar } from "../NavBar";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* Inicio */}
        {/* <Route exact path="/" component={ItemListContainer} /> */}
        <Route exact path="/">
          <h3>Inicio</h3>
          <ItemListContainer />
        </Route>

        {/* Marcas */}
        <Route exact path="/category/:categoryId">
          <h3>Relojes disponibles</h3>
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
    </BrowserRouter>
  );
};

export default Router;
