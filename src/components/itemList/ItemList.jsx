import Item from '../item/Item'
import '../item/item.css'
import '../itemList/itemList.css'
import { Icon } from "@iconify/react";
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';




const ItemList = ({heading, films, removeIntro}) => {

    const { theme } = useContext(ThemeContext)

    return (

        <div className="items-panel">
        <h2>{heading.toUpperCase()}</h2>
        <hr />
        <div className="carousel-container">

            <div className="items-container">
            {
                films
                ?
                films.map( (film) => {
                    return (
                    <div key={film.id} className="item-container">
                        <Item
                            film={film}
                            removeIntro={removeIntro}
                            />
                    </div>
                    )
                })
                : 
                    <h1 className='loader'>Loading</h1>
            }
            
        </div>

        </div>

    </div>


    )
}

export default ItemList