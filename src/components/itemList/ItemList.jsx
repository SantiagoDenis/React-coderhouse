import Item from '../item/Item'
import '../item/item.css'
import '../itemList/itemList.css'




const ItemList = ({heading, films}) => {

    //Render of each list of films
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