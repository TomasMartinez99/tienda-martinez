import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export const ItemListContainer = props => {
    return <div className="main container">
        <h2>{props.greeting}</h2>

        <ItemCount stock={5} initial={1}/>
        <ItemList/>
    </div>
}

export default ItemListContainer; 