
import { Icon } from '@iconify/react'

const ItemCount = ({film, count, onAdd, onDecrement}) => {


    return (
        <div className="count-container">  
            <p>En stock: {film.stock}</p> 
            <div className="counter">                
                <button className="left-btn" onClick={onAdd}><Icon className="count-icon" icon="ant-design:plus-circle-twotone" /></button>
                <h2>{count}</h2>
                <button className="right-btn" onClick={onDecrement}><Icon className="count-icon" icon="ant-design:minus-circle-twotone" /></button>
            </div>     
        </div>
    )
}
export default ItemCount