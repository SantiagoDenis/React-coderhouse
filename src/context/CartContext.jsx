import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmation: ''
    })

    const [isLogged, setIsLogged] = useState(false)

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
        if (user.name !== '' && user.phone !== '' && user.email !== '' && user.emailConfirmation !== '') {

            let date = new Date()
            
            let order = {}

            order.buyer = {
                name: user.name,
                phone: user.phone,
                email: user.email,
                emailConfirmation: user.emailConfirmation
            }

            order.items = cartItems.map(film => ({
                id: film.id, 
                name: film.filmName, 
                price: film.price * film.cantidad
            })) 

            order.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}; ${date.getHours()}:${date.getMinutes()} hs `

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

        if (user.email === user.emailConfirmation) {
            setIsLogged(true)
            alert(`Bienvenido ${user.name}`)
        } else {
            alert('confirmacion de email fallida, intenta de nuevo')
        }
    }




    return (
        <CartContext.Provider value={{
            cartItems,
            user,
            isLogged,
            addItem,
            removeItem,
            clearCart,             
            isInCart,
            watchQuantity,
            watchTotalPrice,
            handleEndOfShop,
            setUserData,
            updateUserData,
            setIsLogged
        }}>
            
            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider