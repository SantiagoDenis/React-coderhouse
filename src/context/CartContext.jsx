import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: ''
    })

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
    
    const handleEndOfShop = () => {
        if (user.name !== '' && user.phone !== '' && user.email !== '') {
            let date = new Date()
            
            let order = {}

            order.buyer = {
                name: user.name,
                phone: user.phone,
                email: user.email
            }

            order.items = cartItems.map(film => ({
                id: film.id, 
                name: film.filmName, 
                price: film.price * film.cantidad
            })) 

            order.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}: ${date.getHours()}, ${date.getMinutes()} `

            order.total = watchTotalPrice()

            const db = getFirestore()

            const newQueryCollection = collection(db, 'orders')

            addDoc(newQueryCollection, order)
            .then(res => alert(`Felicidades por tu compra ${user.name}! El id de tu orden es ${res.id}`))
            .catch(err => console.log(err))


        } else {
            alert('Por favor, inicia sesion antes comprar')
        }
    }

    const setUserData = (e) => {
        setUser (prevUser => (
            {
                ...prevUser,
                [e.target.name]: e.target.value
            }
        ))
    }

    const updateUserData = (e) => {
        e.preventDefault()
        alert(`Bienvenido ${user.name}`)
    }




    return (
        <CartContext.Provider value={{
            cartItems,
            user,
            addItem,
            removeItem,
            clearCart,             
            isInCart,
            watchQuantity,
            watchTotalPrice,
            handleEndOfShop,
            setUserData,
            updateUserData
        }}>
            
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider