import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'
import './orders.css'
 
const Orders = () => {

    //Want first to check if the user is logged before rendering his orders.
    const { user, isLogged } = useContext(CartContext)

    const [orders, setOrders] = useState([])
    const [loader, setLoader] = useState(true)

    //Get all the orders from firebase.
    useEffect( () => {
        const db = getFirestore()

        const queryCollection = collection(db, 'orders')

        getDocs(queryCollection)

        .then(response => setOrders(response.docs.map(order => {
                                    return {id: order.id,
                                        ...order.data()
                                    }
        }))
        )
        .catch(err => console.log(err))
        .finally(setLoader(false))


    }, [])

    
    
    //First, i filter the orders depending on the user that requests them and return html with them.
    const findOrders = ( ) => {
        const filteredOrders = orders.filter((order) => user.name === order.buyer.name && user.phone === order.buyer.phone && user.email === order.buyer.email)
        //Check if that user has any orders adding conditional rendering.
        if (filteredOrders.length !== 0) {
            return filteredOrders.map(order => {
                return (
                    <div className="order-container" key={order.id}>
                        <p className="order-date">Fecha: {order.date}</p>
                        <h1 className="order-title">Id de tu orden: <br /> <b>{order.id}</b> </h1>
                        <hr className="order-hr"/>
                        <div className="order-details">
                            <h3>Peliculas: </h3>
                            {order.items.map((item, index, arr) => {
                                if (arr.length > 1) {
                                    return (
                                        <div key={index}>
                                            <p>{`${index + 1}: ${item.name}: ${item.cantidad} ${item.cantidad === 1 ? 'copia' : 'copias'}`}</p> <br />
                                        </div>
                                    )
                                } else {
                                    return <p key={index}>{`${item.name}: ${item.cantidad} ${item.cantidad === 1 ? 'copia' : 'copias'}`}</p>
                                }
                            })}
                        </div>
                        <p className="order-total">Precio total: {order.total}</p>
                    </div>
                )
            })
        } else {
            return (
                <div>
                    <h1>Ups, aun no has comprado nada!</h1>
                    <Link to={'/'} className="highlight-link">
                            <button className="option-btn">Quiero comprar!</button>
                    </Link>
                </div>
            )
        }
    }


    return ( 
        //Set up a loader that waits for the data and check if the user is logged to show that data.
        <>
            {
                loader
                ?
                <h1>Cargando contenido...</h1>
                :
                <>
                    {
                        isLogged
                        ?
                        <div className="orders-container">
                            {findOrders()}
                        </div>
                        :
                        <div className="not-orders-container">
                            <h1>Por favor, inicia sesion para acceder a tus compras</h1>
                        </div>

                    }
                </>

            }
        </>
        
    );
} 
export default Orders