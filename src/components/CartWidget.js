import React from 'react';

export const CartWidget = () => {
    return <>
        <div className="carrito-contenedor">
            <div className="contador">
                <p>1</p>
            </div>
            <i class="fas fa-shopping-bag"></i>
        </div>
    </>
}

export default CartWidget;