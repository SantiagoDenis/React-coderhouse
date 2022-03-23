

import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './item.css'
import '../cart/cart.css'
import { ThemeContext } from '../../context/ThemeContext';


const Item = ({film, removeIntro}) => {

    const {theme} = useContext(ThemeContext)

    const remove = () => {
        removeIntro()
    }   

     const [isOptionsShown, setIsOptionsShown] = useState(true)
 

    const handleMouseOver = () => {
        
        setIsOptionsShown (prevIsOptionsShown => !prevIsOptionsShown)
    }
    const handleMouseLeave = () => {
        
        setIsOptionsShown (prevIsOptionsShown => !prevIsOptionsShown)
    } 


    return (
            <>
                {isOptionsShown && <img src={film.img} alt={film.filmName} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />}
                {
                !isOptionsShown && 
                <div className="over-img" style={{backgroundImage: `url(${film.img})`}} onMouseLeave={handleMouseLeave}>
                    <div className={`item-gradient${theme ? '-light' : ''}`}>
                        <h3 className={`item-gradient-title${theme ? '-light' : ''}`}>{film.filmName}</h3>
                        <div className="options">
                            <Link to={`/item/${film.id}`} className="link">
                                <button onClick={remove} className='options-btn'>Detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            </>

)
}
export default Item