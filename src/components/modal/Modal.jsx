
import image from '../item/fightClub.jpg';
import ItemCount from '../itemCount/ItemCount';
import '../itemCount/itemCount.css'
import { Icon } from '@iconify/react'
import { useState } from 'react';

const Modal = ({func, data}) => {

    const [count, setCount] = useState(1)

    const handleAdd = () => {
        if (count < data.stock) {
            setCount(prevCount => prevCount + 1)
        }
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    }



    return (
        <div className="modal-container">
            <div className="modal">
                <div className="film-info">
                    <div className="primary-info">
                        <img src={image} alt="fight club poster"/>
                    </div>
                    <div className="secondary-info">
                        <h1>{data.filmName}</h1>
                        <hr />                        
                        <p>{data.sinopsis}</p>
                    </div>
                </div>
                {
                    data.stock === 0 
                    ? 
                    <div className="film-options">
                    {/* <button>Add to watchlist</button> */}
                        <h1>Ups! Parece que no tenemos stock por el momento! <br /> Vuelve mas tarde!</h1>
                    </div>
                    :
                    <div className="film-options">
                    {/* <button>Add to watchlist</button> */}
                        <ItemCount data={data} count={count} onAdd={handleAdd} onDecrement={handleDecrement}/>
                        <h3>Precio total: {data.price * count}</h3>
                        <button className='film-options-btn'><b>Agregar al carrito</b></button>
                        <button className='film-options-btn'><b>Comprar ahora</b></button>
                    </div>
                }
                <div className="exit">
                    <button onClick={func}><Icon className='close-button' icon="ant-design:close-circle-twotone" /></button>
                </div>
            </div>
        </div>
    )
}
export default Modal