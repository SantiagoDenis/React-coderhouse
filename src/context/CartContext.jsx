import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const isInCart = (id) => {
        return cartItems.some(item => item.id === id)
    }
    
    const removeItem = (id) => {
        setCartItems (prevCartItems => prevCartItems.filter((cartItem) => cartItem.id !== id) )
    }

    const watchQuantity = () => {
        return cartItems.reduce((totalQuantity, item) => {
            return totalQuantity + item.cantidad
        }, 0)
    }

    const addItem = (item, quantity, price) => {
        const overMaxQuantity = (realQuantity) => {
            alert('te has sobrepasado del stock!')
            return realQuantity = 10
        }
        if (!isInCart(item.id)) {
            setCartItems( prevCartItems => [...prevCartItems, {...item, cantidad: quantity, price: price}])
        } else {
            const doubledItem = cartItems.find((cartItem) => cartItem.id === item.id)
            const realQuantity = doubledItem.cantidad + quantity
            removeItem(item.id)
            setCartItems( prevCartItems => [...prevCartItems, {...doubledItem, cantidad: (realQuantity > 10 ? overMaxQuantity(realQuantity) : realQuantity), price: price}])
        }
    }

    const clearCart = () => {
        setCartItems([])
    }

    const watchTotalPrice = () => {
        return cartItems.reduce((totalPrice, item) => {
            return totalPrice + item.price * item.cantidad
        }, 0)
    }




    return (
        <CartContext.Provider value={{
            cartItems,
            addItem,
            removeItem,
            clearCart,             
            isInCart,
            watchQuantity,
            watchTotalPrice
        }}>
            
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider