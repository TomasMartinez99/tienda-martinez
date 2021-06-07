import React, { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [{initial}, setInitial] = useState({initial});

    const incrementar = () => {
        setInitial(initial + 1);
    }

    const decrementar = () => {
        setInitial(initial + 1);
    }

    return <>
        <div className="agregarCarrito">
            <button onClick={e => decrementar()}>-</button>
            {initial > 0 ? <input value={ `${initial}` }/> : <input value="0"/>}
            <button onClick={e => incrementar()}>+</button>
            <p>Agregar al carrito</p>
        </div>
    </>
}

export default ItemCount;