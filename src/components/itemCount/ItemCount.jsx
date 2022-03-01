
import { Icon } from '@iconify/react'

const ItemCount = ({data, count, onAdd, onDecrement}) => {


/*     const [count, setCount] = useState(1) */
/*     const handleAdd = () => {
        if (count < data.stock) {
            setCount(prevCount => prevCount + 1)
        }
    }
    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }
    } */


    return (
        <div className="count-container">  
            <p>En stock: {data.stock}</p> 
            <div className="counter">                
                <button className="left-btn" onClick={onAdd}><Icon className="count-icon" icon="ant-design:plus-circle-twotone" /></button>
                <h2>{count}</h2>
                <button className="right-btn" onClick={onDecrement}><Icon className="count-icon" icon="ant-design:minus-circle-twotone" /></button>
            </div>     
        </div>
    )
}
export default ItemCount