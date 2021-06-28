import React from 'react';
import './styles/index.scss';
import { BrowserRouter } from "react-router-dom";
import { Router } from './components/router/Router';
import { NavBar } from "./components/views/header/NavBar";
import { CartComponentProvider } from "./components/context/CartContext";

function App() {
  return (
    <CartComponentProvider>
      <BrowserRouter>
          <NavBar />
          <Router/>
      </BrowserRouter>
    </CartComponentProvider>
  );
}

export default App;