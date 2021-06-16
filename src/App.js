import React from 'react';
import './styles/index.scss';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/views/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/views/ItemListContainer/ItemListContainer';

function App() {
  return <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
}

export default App;