import React from 'react';
import './styles/index.scss';
import { BrowserRouter } from "react-router-dom";
import { Router } from './components/router/Router';
import { NavBar } from "./components/views/header/NavBar";

function App() {
  return <BrowserRouter>
      <NavBar />
      <Router/>
  </BrowserRouter>
}

export default App;