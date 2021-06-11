import React from 'react';
import CartWidget from './CartWidget';

export const NavBar = () => {
    return <>
        <header>
            <div className="fixed">
                <nav className="menu">
                    {/* Logo tienda */}
                    <div className="logo">
                        <p>SmartWatches</p>
                    </div>
                    
                    {/* Buscador */}
                    <div className="buscador">
                        <input type="text" placeholder="Buscar..."></input>
                        <i className="fas fa-search"></i>
                    </div>
                    
                    {/* Enlaces */}
                    <ul className="enlaces">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Categorias</a></li>
                        <li><a href="#">Productos</a></li>
                    </ul>
                    
                    {/* Carrito */}
                    <CartWidget/>

                    {/* Btn iniciar sesion */}
                    <a href="#" className="btn btn-outline-light">Iniciar sesión</a>
                </nav>
                {/* Buscador 2 */}
                <div className="buscador-2">
                    <input type="text" placeholder="Buscar..."></input>
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </header>
    </>
}

export default NavBar;