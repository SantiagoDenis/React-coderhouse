import image from '../../helpers/fightClub.jpg'
import ItemCount from '../itemCount/ItemCount'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const ItemDetails = ({films}) => {
    
    
    const film = films[0]
    const [count, setCount] = useState(1)
    const [isAddClicked, setIsAddClicked] = useState(false)

    const handleAdd = () => {
        if (count < film.stock) {
            setCount(prevCount => prevCount + 1)
        }
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    }

    const handleAddClicked = () => {
        setIsAddClicked(prevIsAddClicked => !prevIsAddClicked)
    }

    const handleFinishShop = () => {
        navigate('/')
        alert('La compra se ha realizado con exito!')
    }

    let navigate = useNavigate()
    
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

                    <ItemCount film={film} count={count} onAdd={handleAdd} onDecrement={handleDecrement}/>
                    <h3>Precio total: {film.price * count}</h3>

                    {!isAddClicked 
                    ?
                        <button className='film-options-btn' onClick={handleAddClicked}>Agregar al carrito</button>
                    :
                    <>
                        <button className='film-options-btn' onClick={() => {navigate('/cart')}}><b>Ir al carrito</b></button>
                        <button className='film-options-btn' onClick={handleFinishShop}><b>Terminar compra</b></button>
                    </>
                    }
                </div>
            }
        </div>
    )
}

export default ItemDetails