import Item from '../item/Item'
import '../item/item.css'
import '../itemList/itemList.css'



const ItemList = ({func, films}) => {

    return (
        <div className="items-container">
            {
                films
                ?
                films.map( (film) => {
                    return (
                    <div key={film.id} className="item-container">
                        <Item func={func}
                            film={film}
                            />
                    </div>
                    )
                })
                : 
                    <h1 className='loader'>Loading</h1>
            }
            
        </div>
    )
}

export default ItemList