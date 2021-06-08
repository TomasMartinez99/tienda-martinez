import React from 'react';
import ItemCount from './ItemCount';


export const ItemListContainer = props => {
    return <div className="main container">
        <h2>{props.greeting}</h2>
        <ItemCount stock="5" initial="5"/>
    </div>
}

    export default ItemListContainer; 
