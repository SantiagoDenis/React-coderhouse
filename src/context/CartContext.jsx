import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const isInCart = (id) => {
        return cartItems.some(item => item.id === id)
    }
    
    const addItem = (item, quantity, price) => {
        if (!isInCart(item.id)) {
            setCartItems( prevCartItems => [...prevCartItems, {...item, cantidad: quantity, price: price}])
        } else {
            alert('Este item ya ha sido agregado previamente! Para modificar su cantidad, dirigete al carrito de compras.')
        }
    }

    const removeItem = (id) => {
        setCartItems (prevCartItems => prevCartItems.filter((cartItem) => cartItem.id !== id) )
    }

    const clearCart = () => {
        setCartItems([])
    }

    const watchQuantity = () => {
        return cartItems.reduce((totalQuantity, item) => {
            return totalQuantity + item.cantidad
        }, 0)
    }
    const watchTotalPrice = () => {
        return cartItems.reduce((totalPrice, item) => {
            return totalPrice + item.price * item.cantidad
        }, 0)
    }
    const changeQuantity = (item, quantity) => {
        setCartItems( prevCartItems => [...prevCartItems, {...item, cantidad: quantity}])
    }



    return (
        <CartContext.Provider value={{
            cartItems,
            addItem,
            removeItem,
            clearCart,             
            isInCart,
            watchQuantity,
            watchTotalPrice,
        }}>
            
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider