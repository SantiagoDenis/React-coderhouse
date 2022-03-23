
import '../Navbar/navbar.css';
import { Link } from 'react-router-dom';
import './introduction.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const Introduction =  ({removeIntro}) => {

    const { theme } = useContext(ThemeContext)

    const remove = () => {
        removeIntro()
    }
    
    return (
            <div className={`background-image${theme ? '-light' : ''}`}>
                <div className={`gradient${theme ? '-light' : ''}`}>
                    <div className="intro-sign">
                        <h1 className='intro-title'>La pelicula que deseas, al alcance de un click</h1>  
                        <Link to={'contact'} className="introduction-link" >
                            <button onClick={ remove } className='intro-btn'>Inicia Sesion!</button>  
                        </Link>
                        <button className='close-btn' onClick={removeIntro}>Cerrar introduccion</button>
                    </div>

                </div>
            </div>

    )
}

export default Introduction