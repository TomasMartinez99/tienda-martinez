import React from 'react';
import Item from './Item';

export const ItemList = props => {
    return <>
        <Item>
            {props.dataToShow.length == 0 ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    <ul>
                        {props.dataToShow.map((element) => (
                            <li key={element.id}>{element.title}</li>
                        ))}
                    </ul>
                </>
            )}
        </Item>
    </>
}

export default ItemList;