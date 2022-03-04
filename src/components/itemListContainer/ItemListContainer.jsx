import { Icon } from "@iconify/react";

import ItemList from "../itemList/ItemList";

const ItemListContainer = ({heading, func, films, loader}) => {


    return (
        <div className="items-panel">
            <h2>{heading.toUpperCase()}</h2>
            <hr />
            <div className="carousel-container">
                <Icon className="icon" icon="ic:outline-navigate-next" width="70" height="70" hFlip={true} />

                <ItemList func={func} films={films.length !== 0 && films}/>

                <Icon className="icon" icon="ic:outline-navigate-next" width="60" height="60" />
            </div>

        </div>
    )
}
export default ItemListContainer