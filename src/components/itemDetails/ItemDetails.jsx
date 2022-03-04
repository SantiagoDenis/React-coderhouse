import image from '../../helpers/fightClub.jpg'
import ItemCount from '../itemCount/ItemCount'
import { useState } from 'react'
import { Icon } from '@iconify/react'

const ItemDetails = ({func, films}) => {
    
    
    const film = films[0]
    const [count, setCount] = useState(1)

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
    
    return (
        <div className="details-container">
            <div className="film-info">
                <div className="primary-info">
                    <img src={image} alt="fight club poster"/>
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
                    <button className='film-options-btn'><b>Agregar al carrito</b></button>
                    <button className='film-options-btn'><b>Comprar ahora</b></button>
                </div>
            }
            <div className="exit">
                <button onClick={func}><Icon className='close-button' icon="ant-design:close-circle-twotone" /></button>
            </div>
        </div>
    )
}

export default ItemDetails