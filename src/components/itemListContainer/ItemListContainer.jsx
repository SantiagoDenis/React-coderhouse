import { Icon } from "@iconify/react";
import '../item/item.css'
import Item from '../item/Item'

const ItemListContainer = ({heading}) => {
    return (
        <div className="items-panel">
            <h2>{heading.toUpperCase()}</h2>
            <hr />
            <div className="carousel-container">
                <Icon className="icon" icon="ic:outline-navigate-next" width="70" height="70" hFlip={true} />
                <div className="items-container">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
                <Icon className="icon" icon="ic:outline-navigate-next" width="60" height="60" />
            </div>

        </div>
    )
}
export default ItemListContainer