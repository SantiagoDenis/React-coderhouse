import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";

 
const Orders = () => {
//intento traer las ordenes para mostrarlas en 'compras' pero me crea un loop infinito 
/*  const [orders, setOrders] = useState()

    const db = getFirestore()

    const queryCollection = collection(db, 'orders')

    getDocs(queryCollection)

    .then(res => setOrders(res.docs.map(order => {
        return {
            orderId: order.id,
            ...order.data()
        }
    })))
    .catch(err => console.log(err))

    console.log(orders)
    */



    return ( <div></div> );
} 
export default Orders