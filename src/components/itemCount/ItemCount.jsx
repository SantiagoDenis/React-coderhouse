
import { Icon } from '@iconify/react'
import './itemCount.css'
import { useState } from 'react'


const ItemCount = ({film, count, setCount}) => {

    
    const handleAdd = () => {
        if (count < film.stock) {
            setCount(prevCount => prevCount + 1)
        }
    }
    
        const handleDecrement = () => {
            if (count > 1) {
                setCount(prevCount => prevCount - 1)
            }
        }
    
    return (
        <div className="count-container">  
            <p>En stock: {film.stock}</p> 
            <div className="counter">                
                <button className="left-btn" onClick={handleAdd}><Icon className="count-icon" icon="ant-design:plus-circle-twotone" /></button>
                <h2>{count}</h2>
                <button className="right-btn" onClick={handleDecrement}><Icon className="count-icon" icon="ant-design:minus-circle-twotone" /></button>
            </div>     
        </div>
    )
}
export default ItemCount