import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

//This is the cart context: Where i'll be defining the cart items and the user (the owner of those items). Also is the space in which some firebase operations will take place. Such as adding orders from the user and updating the stock depending of the quantity ordered of each item.

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {

    //The definition of states used in this context

    const [cartItems, setCartItems] = useState([])

    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmation: ''
    })

    const [isLogged, setIsLogged] = useState(false)

    //All the cart functions

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
            toast.error('Te has sobrepasado del stock!')
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

    //The asynchronous function that handles the end of the order. It creates the order with the relevant data, then pushes that order to firebase and updates the stock when doing it.
    
    const handleEndOfShop = async () => {
        if (user.name !== '' && user.phone !== '' && user.email !== '' && user.emailConfirmation !== '') {
            setIsLogged(true)
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
                price: film.price * film.cantidad,
                cantidad: film.cantidad
            })) 

            order.date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}; ${date.getHours()}:${date.getMinutes()} hs `

            order.total = watchTotalPrice()

            const db = getFirestore()

            const newQueryCollection = collection(db, 'orders')

            addDoc(newQueryCollection, order)
            .then(res => toast.success(
                <div>
                    {`Felicidades por tu compra ${user.name}! El id de tu orden es ${res.id}`}
                    <br />
                    Puedes ver tu orden de compra y su id en tu perfil
                </div>
                ))
            .catch(err => console.log(err))

            const queryCollection = collection(db, 'items')

            const updateStock = query(
                queryCollection, where( documentId() , 'in', cartItems.map(film => film.id) )          
            )

            const batch = writeBatch(db)

            await getDocs(updateStock)
                .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                    stock: res.data().stock - cartItems.find(item => item.id === res.id).cantidad
            }) ))
            .catch(err => console.log(err))

            batch.commit()


        } else {
            toast.warn('Por favor, inicia sesion antes comprar')
        }
    }

    //The last two functions setting the user data from the form

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
            toast(`Bienvenido ${user.name}`)
        } else {
            toast.error('confirmacion de email fallida, intenta de nuevo')
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