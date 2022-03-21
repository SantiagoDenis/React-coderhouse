
import ItemCount from '../itemCount/ItemCount'
import { useContext, useState } from 'react'
import './itemDetails.css'

import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetails = ({films, id}) => {
    

    //Asi funciona
    const film = films[id - 1]

    //Asi no funciona. No entiendo por que... El error que devuelve es "cannot read properties of undefined. Reading 'price'." Por lo que creo, no entiende que es film. Pero haciendo arriba algo muy similar si lo entiende.
    //const film = films.find( (film) => film.id === id)

    const {addItem, removeItem} = useContext(CartContext)
    
    const [count, setCount] = useState(1)

    const [isAddClicked, setIsAddClicked] = useState(false)
    const [price, setPrice] = useState(film.price)

    const handleAddClicked = () => {
        setIsAddClicked(prevIsAddClicked => !prevIsAddClicked)
        addItem(film, count, price)
    }

    const handleEndOfShop = () => {
        removeItem(film.id)
        alert('Su compra ha sido exitosa!')
    }

    
    return (

        <div className="details-container">
            <div className="film-info">
                <div className="primary-info">
                    <img src={film.img} alt="fight club poster"/>
                </div>
                <div className="secondary-info">
                    <h1>{film.filmName}</h1>
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
                        !isAddClicked
                        ?
                        <>
                            <ItemCount film={film} count={count} setCount={setCount}/>
                            <h3>Precio total: {price * count}</h3>
                            <button className='film-options-btn' onClick={handleAddClicked}>Agregar al carrito</button>
                        </>
                        :
                        <>  
                            <Link to={'/cart'} className='options-link' >
                                <button className='film-options-btn'><b>Ir al carrito</b></button>
                            </Link>
                            <Link to={'/'} className='options-link' >
                                <button className='film-options-btn'><b>Seguir comprando</b></button>
                            </Link>
                            <Link to={'/'} className='options-link' >
                                <button onClick={handleEndOfShop} className='film-options-btn'><b>Terminar compra</b></button>
                            </Link>
                        </>

                    }
                </div>
            }
        </div>
    )
}

export default ItemDetails

/* 
                <div className="film-options">

                    {
                        !isAddClicked &&
                        <>
                            <ItemCount film={film} count={count} setCount={setCount}/>
                            <h3>Precio total: {price * count}</h3>
                        </>
                    }
                    {isInCart(film.id) 
                    ?
                    
                        <Link to={'/'} className='options-link' >
                            <button onClick={handleEndOfShop} className='film-options-btn'><b>Terminar compra</b></button>
                        </Link>
                    :
                    <>
                        {
                        !isAddClicked 
                        ?
                            <button className='film-options-btn' onClick={handleAddClicked}>Agregar al carrito</button>
                        :
                        <>  
                            <Link to={'/cart'} className='options-link' >
                                <button className='film-options-btn'><b>Ir al carrito</b></button>
                            </Link>
                            <Link to={'/'} className='options-link' >
                                <button className='film-options-btn'><b>Seguir comprando</b></button>
                            </Link>
                        </>
                        }
                    
                    </>
                    }
                </div>
*/