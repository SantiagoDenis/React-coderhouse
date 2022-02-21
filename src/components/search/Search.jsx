
import { Icon } from "@iconify/react";
import '../item/item.css'
import Item from '../item/Item'

const Search = () => {
    return ( 
        <div className="search-panel">
        <div className="search-input">
            <h2>BUSCAR PELICULAS</h2>
            <input type="text" name="searchBar" id="search-bar"/>
                <Icon icon="ic:baseline-search" style={ {
                    height: 25,
                    width: 20
                } } />
        </div>
        <hr />
        <div className="carousel-container">
            {/* <Icon className="icon" icon="ic:outline-navigate-next" width="70" height="70" hFlip={true} /> */}
            <div className="items-container">
                {/* Aca voy a inyectar las coincidencias a medida que se insertan caracteres en el input */}
            </div>
            {/* <Icon className="icon" icon="ic:outline-navigate-next" width="60" height="60" /> */}
        </div>

    </div>
     );
}
 
export default Search;