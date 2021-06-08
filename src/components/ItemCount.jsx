import React, { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const incrementar = () => {
        setCount(count + 1);
    }

    const decrementar = () => {
        setCount(count - 1);
    }

    return <>
        <div className="agregarCarrito">
            <button onClick={e => decrementar()}>-</button>
            {count > 0 ? <input value={count}/> : <input value="0"/>}
            <button onClick={e => incrementar()}>+</button>
            <p>Agregar al carrito</p>
        </div>
    </>
}

export default ItemCount;