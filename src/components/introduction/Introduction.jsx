
import '../Navbar/navbar.css';
import { Link } from 'react-router-dom';
import './introduction.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext';


const Introduction =  () => {

    const { theme } = useContext(ThemeContext)
    const { isLogged } = useContext(CartContext)
    
    return (
            <div className={`background-image${theme ? '-light' : ''}`}>
                <div className={`gradient${theme ? '-light' : ''}`}>
                    <div className="intro-sign">
                        <h1 className='intro-title'>La pelicula que deseas, al alcance de un click</h1>  
                        {
                            !isLogged
                            ?
                            <Link to={'contact'} className="introduction-link" >
                                <button className='intro-btn'>Inicia Sesion!</button>  
                            </Link>
                            :
                            <Link to={'watchlist'} className="introduction-link" >
                                <button className='intro-btn'>Mi watchlist</button>  
                            </Link>
                        }
                        <Link to={'orders'} className="introduction-link">
                            <button className='close-btn'>Ver mis compras</button>
                        </Link>
                    </div>

                </div>
            </div>

    )
}

export default Introduction