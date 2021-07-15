import React from "react";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { NavBar } from "./components/header/NavBar";
import { CartComponentProvider } from "./context/CartContext";

function App() {
  return (
    <CartComponentProvider>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </CartComponentProvider>
  );
}

export default App;
