import React from 'react';
import './styles/index.scss';
import { BrowserRouter } from "react-router-dom";
import { Router } from './components/router/Router';

function App() {
  return <BrowserRouter>
      <Router/>
  </BrowserRouter>
}

export default App;