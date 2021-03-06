import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import {Link} from 'react-router-dom'
import './cart.css'
import '../item/item.css'
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import ContactForm from '../contactForm/ContactForm';



const Cart = () => {

    const {cartItems, removeItem, clearCart, watchTotalPrice, handleEndOfShop, isLogged} = useContext(CartContext)

    const { theme } = useContext(ThemeContext)

    const [isFinishShopClicked, setIsFinishShopClicked] = useState(false)

    //Funciton for when the user finishes the shop
    const finishShop = () => {
        handleEndOfShop()
        setIsFinishShopClicked(true)
        if (isLogged) {
            clearCart()
        }
    }


    return (

            <div className="cart-container">
                {
                    (!isLogged && isFinishShopClicked)
                    &&
                    <div className="pop-up-contact">
                        <ContactForm/>
                    </div>
                }
                {
                    cartItems.length !== 0
                    ? 
                    cartItems.map( (film) => {
                        return (
                            <div className={`cart-item${theme ? '-light' : ''}`} key={film.id}>
                                <h1 className="item-section-title">{film.filmName}</h1>
                                <img className="item-section-img" src={film.poster} alt={film.filmName} />
                                <div className="item-section-option">
                                    <h3>Compraras {film.cantidad} {film.cantidad === 1 ? 'copia' : 'copias'}</h3>
                                    <Link to={`/item/${film.id}`} className="highlight-link">
                                        <button className="film-options-btn" onClick={() => removeItem(film.id)}>Cambiar cantidad</button>
                                    </Link>
                                </div>
                                <div className="item-section-price">
                                    <h3>Precio:</h3>
                                    <h2 className="highlight">{film.price * film.cantidad}</h2>
                                </div>
                                <Icon onClick={() => {removeItem(film.id)}} className="item-section-icon" icon="ic:baseline-delete-forever" color="#780d16"/>
                            </div>
                        )
                    })

                    :
                    <>
                        <h1>No has agregado ninguna pelicula por el momento!</h1>
                        <Link to={'/'} className="highlight-link">
                            <button className="film-options-btn">Quiero comprar!</button>
                        </Link>
                    </>
                }
                {cartItems.length !== 0 && (
                    <div className="btns-container">
                        <button onClick={finishShop} className='film-options-btn'><b>Terminar compra</b></button>
                        <button onClick={clearCart} className="film-options-btn">Vaciar Carrito</button>
                        <h1>{`Precio total: $${watchTotalPrice()}`}</h1>
                    </div>
                )}

            </div>

     );
}
 
export default Cart;