
import '../itemCount/itemCount.css'

import ItemDetails from '../itemDetails/ItemDetails'
import './itemDetailsContainer.css'


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailsContainer = () => {

    const {id} = useParams()

    const [film, setFilm] = useState({})

    const [load, setLoad] = useState(true)
    useEffect( () => {

        const db = getFirestore()

        const queryDoc = doc(db, 'items', id)

        getDoc(queryDoc)
        .then(response => setFilm({id: response.id, ...response.data()}))
        .catch(err => console.log(err))
        .finally(setLoad(false))
    }, [])

    return (
        !load
        
        ?
        <div className="details-wrapper">

            <ItemDetails film={film}/>

        </div>
        :
        <div className="loader-container">
            <h1>Cargando contenido</h1>
        </div>

    )
}
export default ItemDetailsContainer 
