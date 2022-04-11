
import ItemCount from '../itemCount/ItemCount'
import { useContext, useState } from 'react'
import './itemDetails.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { ThemeContext } from '../../context/ThemeContext';
import ContactForm from '../contactForm/ContactForm';


const ItemDetails = ({film}) => {

    const { theme } = useContext(ThemeContext)

    const {addItem, isLogged} = useContext(CartContext)
    
    const [count, setCount] = useState(1)

    const [isAddToCartClicked, setIsAddToCartClicked] = useState(false)

    const [isAddClicked, setIsAddClicked] = useState(false)

    const addCLicked = () => {
        setIsAddClicked(prevIsAddClicked => !prevIsAddClicked)
    }

    const addToCart = () => {
        addCLicked()
        setIsAddToCartClicked(prevIsAddToCartClicked => !prevIsAddToCartClicked)
        addItem(film, count, film.price)
    }

    const backgroundImage = film.poster
    
    return (

        <>
            {
                isAddClicked
                &&
                <>                
                    {
                        (!isLogged)
                        &&
                        <div className="pop-up-contact">
                            <ContactForm/>
                        </div>
                    }
                </>
            }

            <div className="background-image-details" style={{
            backgroundImage: [`url(${backgroundImage})`],
            width: '80vw',
            height: '90vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        
            }}>
                <div className={`gradient-details${theme ? '-light' : ''}`}>
                </div>
            </div>

            <div className="itemDetails-container">
                <div className="details-container">
                    <div className="film-info">
                        <div className="primary-info">
                            <img src={film.img} alt="fight club poster"/>
                        </div>
                        <div className="secondary-info">
                            <h1>{film.filmName}</h1>
                            <p style={{color: 'White', marginBottom:'20px'}}>{film.duration}</p>
                            <p>Dirigida por: {film.director}</p>
                            <hr />                        
                            <p>{film.sinopsis}</p>
                        </div>
                    </div>
                    {
                        film.stock === 0 
                        ? 
                        <div className="film-options">
                            <h1>Ups! Parece que no tenemos stock por el momento! <br /> Vuelve mas tarde!</h1>
                        </div>
                        :
                        <div className="film-options">

                            {
                                !isAddToCartClicked
                                ?
                                <>
                                    <ItemCount film={film} count={count} setCount={setCount}/>
                                    <h3>Precio total: {film.price * count}</h3>
                                    <button className='film-options-btn' onClick={addToCart}>Agregar al carrito</button>
                                </>
                                :
                                <>  
                                    <Link to={'/cart'} className='options-link' >
                                        <button className='film-options-btn'><b>Ir al carrito</b></button>
                                    </Link>
                                    <Link to={'/'} className='options-link' >
                                        <button className='film-options-btn'><b>Seguir comprando</b></button>
                                    </Link>
                                    <Link to={'/cart'} className='options-link' >
                                        <button className='film-options-btn'><b>Terminar compra</b></button>
                                    </Link>
                                </>

                            }
                        </div>
                    }
                </div>
            </div>
        </>

    )
}

export default ItemDetails