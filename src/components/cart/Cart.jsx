import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import image from '../itemDetailsContainer/fight-club-poster.jpg'

const Cart = ({films}) => {
    //esto luego sera agregado dinamicamente cuando sepa como agregar los items al carrito
    const film = films[0]
    const [load, setLoad] = useState('')
    let navigate = useNavigate()
    //use effect para simular retardos
    useEffect( () => {

        const fakeRequest = new Promise ( (resolve) => {
            setTimeout( () => {
                const url = 'films'
                if (url === 'films') {
                    resolve('200')
                }
            }, 2000)
            })
        fakeRequest.then(res => {
            setLoad(res)
        })

    }, [])


    return (
        load === '200'
        ?
        <div className="cart-container">
            <div className="cart-item">
                <h1 className="item-section-title">{film.filmName}</h1>
                <img className="item-section-img" src={image} alt={film.filmName} />
                <div className="item-section-option">
                    <h3>Compraras (x cantidad) de copia/s</h3>
                    <button className="highlight" onClick={() => {navigate('/item/1')}}>Agregar mas</button>
                </div>
                <div className="item-section-price">
                    <h3>Precio total:</h3>
                    <h2 className="highlight">{film.price}</h2>
                </div>
                <Icon className="item-section-icon" icon="ant-design:close-circle-twotone" color="#780d16" /> 
            </div>
        </div>
        :
        <div className="loader-container">
            <h1>Cargando contenido</h1>
        </div>
     );
}
 
export default Cart;