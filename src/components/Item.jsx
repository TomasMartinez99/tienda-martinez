import React, {useState, useEffect} from 'react';

// Promise
const promiseItem = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>
            // Si está todo ok se muestra el resolve
            resolve([
                {
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
                }
            ] 
        ), 2000)
    })
}

export const Item = props => {
    
    // Hook useState
    const [dataToShow, setDataToShow] = useState([]);

    // Función encargada de llamar a mi promesa
    const ejecutarItem = () => {
        promiseItem().then(relojes)
    }

    // Hook useEffect
    useEffect(() => {
        ejecutarItem();
    }, [])
}

export default Item;