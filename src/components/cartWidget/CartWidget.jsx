import { Icon } from '@iconify/react';
import './cartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cartItems, watchQuantity} = useContext(CartContext)
    
    return (
        <div className='shop'>
            {
                cartItems.length !== 0
                ?
                <div className='shopping'>                
                    <Icon icon="ic:round-shopping-cart" style={ {
                        width: 30,
                        height: 30,
                        color: '#780D16' 
    
                    } } >
                    </Icon>
                    <h3>{watchQuantity()}</h3>
                </div>
                :
                <Icon  icon="ic:round-add-shopping-cart" style={ {
                    width: 30,
                    height: 30,
                    color: '#780D16' 
    
                } } />

            }
        </div> 
    )
}
export default CartWidget
//