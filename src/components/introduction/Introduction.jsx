
import Navbar from '../navbar/Navbar'
import '../navbar/navbar.css';
import { useNavigate } from 'react-router-dom';

const Introduction =  ({removeIntro}) => {
    
    let navigate = useNavigate()

    const navigateAndRemove = () => {
        navigate('contact')
        removeIntro()
    }
    
    return (
            <div className="background-image">
                <div className="gradient">
                    <div className="intro-sign">
                        <h1 className='intro-title'>La pelicula que deseas, al alcance de un click</h1>  
                        <button onClick={ navigateAndRemove } className='intro-btn'>Inicia Sesion!</button>  
                        <button className='intro-btn red' onClick={removeIntro}>Cerrar introduccion</button>
                    </div>

                </div>
            </div>

    )
}

export default Introduction