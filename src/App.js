import React from 'react';
import './styles/index.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return <>
    <NavBar/>
    <ItemListContainer/>
  </>
}

export default App;