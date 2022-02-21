import { Icon } from '@iconify/react';

const CartWidget = () => {
    return (
        <a className='shop' href="#">
            <Icon  icon="ic:round-add-shopping-cart" style={ {
                width: 30,
                height: 30,
                color: '#780D16' 

            } } />
        </a> 
    )
}
export default CartWidget