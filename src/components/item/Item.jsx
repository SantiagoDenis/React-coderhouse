
import image from './fightClub.jpg';
import { useState } from 'react';


const Item = ({func}) => {

     const [isOptionsShown, setIsOptionsShown] = useState(false)
 

    const handleMouseOver = () => {
        
        setIsOptionsShown (prevIsOptionsShown => !prevIsOptionsShown)
    }
    const handleMouseLeave = () => {
        
        setIsOptionsShown (prevIsOptionsShown => !prevIsOptionsShown)
    } 



    return (
        <div className="item-container">
            {!isOptionsShown && <img src={image} alt="fight club poster" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />}
            {
                isOptionsShown && 
                <div className="over-img" onMouseLeave={handleMouseLeave}>
                    <h3>Fight Club</h3>
                    <div className="options">
                        <button onClick={func} className='options-btn'>Details</button>
                    </div>
                </div>
            }

        </div>
    )
}
export default Item