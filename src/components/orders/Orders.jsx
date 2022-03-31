import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './orders.css'
 
const Orders = () => {
//Pude arreglar el loop infinito. Pero ahora devuelve undefined cada vez que intento traer la collection de orders... por que?
//Ademas, si pongo orders en el filtro del useEffect, me hace un loop infinito de nuevo

    const { user, isLogged } = useContext(CartContext)

    const [orders, setOrders] = useState([])
    const [loader, setLoader] = useState(true)

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

    
    
    
    const findOrders = ( ) => {
        const filteredOrders = orders.filter((order) => order.buyer.name === user.name && user.phone === order.buyer.phone && user.email === order.buyer.email)
        if (filteredOrders.length !== 0) {
            return filteredOrders.map(order => {
                console.log(order.items.map(item => item.name))
                return (
                    <div className="order-container" key={order.id}>
                        <p>Fecha: {order.date}</p>
                        <h1 className="order-title">Id de tu orden: <b>{order.id}</b> </h1>
                        <hr />
                        <div>
                            <h3>Peliculas: </h3>
                            {order.items.map((item, index, arr) => {
                                if (arr.length > 1) {
                                    return (
                                        <div key={index}>
                                            <p>{`${index + 1}: ${item.name}.`}</p> <br />
                                        </div>
                                    )
                                } else {
                                    return <p key={index}>{`${item.name}`}</p>
                                }
                            })}
                        </div>
                        <p>Precio total: {order.total}</p>
                    </div>
                )
            })
        } else {
            return <h1>Ups, aun no has comprado nada!</h1>
        }
    }


    return ( 
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