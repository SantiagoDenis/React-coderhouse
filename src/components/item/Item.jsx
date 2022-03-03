

import { useState } from 'react';


const Item = ({func, film}) => {
    console.log(film)

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
                        <button onClick={func} className='options-btn'>Detalles</button>
                    </div>
                </div>
            }
            </>

)
}
export default Item