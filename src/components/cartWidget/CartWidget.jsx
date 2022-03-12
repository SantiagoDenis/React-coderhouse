import { Icon } from '@iconify/react';

const CartWidget = () => {
    return (
        <p className='shop'>
            <Icon  icon="ic:round-add-shopping-cart" style={ {
                width: 30,
                height: 30,
                color: '#780D16' 

            } } />
        </p> 
    )
}
export default CartWidget