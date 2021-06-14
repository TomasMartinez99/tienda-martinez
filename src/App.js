import React from 'react';
import './styles/index.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
}

export default App;