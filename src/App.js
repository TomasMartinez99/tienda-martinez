import React from 'react';
import './styles/index.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <>
    <NavBar/>
    <ItemListContainer greeting='Bienvenidos a mi Tienda'/>
  </>
}

export default App;