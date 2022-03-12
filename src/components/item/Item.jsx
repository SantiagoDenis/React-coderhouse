

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({film, removeIntro}) => {

    let navigate = useNavigate()

    const navigateAndRemove = (navigationUrl) => {
        navigate(navigationUrl)
        removeIntro()
    }
    useEffect( () => {})    

     const [isOptionsShown, setIsOptionsShown] = useState(false)
 

    const handleMouseOver = () => {
        
        setIsOptionsShown (prevIsOptionsShown => !prevIsOptionsShown)
    }
    const handleMouseLeave = () => {
        
        setIsOptionsShown (prevIsOptionsShown => !prevIsOptionsShown)
    } 


    return (
            <>
                {!isOptionsShown && <img src={film.img} alt={film.filmName} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />}
                {
                isOptionsShown && 
                <div className="over-img" onMouseLeave={handleMouseLeave}>
                    <h3>{film.filmName}</h3>
                    <div className="options">
                        <button onClick={() => {
                            navigateAndRemove(`/item/${film.id}`)
                        }} className='options-btn'>Detalles</button>
                    </div>
                </div>
            }
            </>

)
}
export default Item