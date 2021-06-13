import React, {useState, useEffect} from 'react';

// Array con relojes
const relojes = [{
    id: 1,
    title: 'Smartwatch Samsung 1',
    price: 25000,
    pictureUrl: '../public/img/relojes/reloj-samsung-1.png',
    alt: 'Smartwatch Samsung 1'
},
{
    id: 2,
    title: 'Smartwatch Samsung 2',
    price: 25000,
    pictureUrl: '../public/img/relojes/reloj-samsung-2.png',
    alt: 'Smartwatch Samsung 2'
},
{
    id: 3,
    title: 'Smartwatch Apple watch 1',
    price: 25000,
    pictureUrl: '../public/img/relojes/apple-watch-1.png',
    alt: 'Smartwatch Apple watch 1'
}]

// Promise
const promiseItem = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // Si está todo ok se muestra el resolve
            resolve(relojes);
        }, 2000)
    })
};

export const Item = props => {
    // Hook useState
    const [dataToShow, setDataToShow] = useState([]);

    // Función encargada de llamar a mi Promise
    const ejecutarItem = () => {
        promiseItem().then(relojes)
    }

    // Hook useEffect (cada vez que se ejecuta este componente, se ejecuta la función ejecutarItem())
    useEffect(() => {
        ejecutarItem();
    }, [])

    return <>
        
    </>
}

export default Item;