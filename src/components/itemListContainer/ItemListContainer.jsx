
import { useState, useEffect, useContext } from 'react';

import { useParams } from "react-router-dom";

import ItemList from "../itemList/ItemList";

import './itemListContainer.css'

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import { CartContext } from '../../context/CartContext';



const ItemListContainer = () => {

    //IMPORTANT: Category is in spanish because the UI of the page is that way. And I consider really important for the user to see this route in teh same language so that it knows where he is just looking at the url.
    const { categoria } = useParams()

    const {user} = useContext(CartContext)

    const [films, setFilms] = useState([])

    const [loader, setLoader] = useState(true)

    
    const filterFilms = (filmsArr, categoria) => {
        return filmsArr.filter((film) => film.categoria === categoria)
    }


    //Bringing the data from firebase and filtering it depending on wether the user choosed a category or not
    useEffect( () => {
        const db = getFirestore()

        const queryCollection = collection(db, 'items')

        if (categoria) {
            const queryCollectionFiltered = query(queryCollection, where('categoria', '==', categoria))
            getDocs(queryCollectionFiltered)
            .then(response => setFilms(response.docs.map(film => {
                return {id: film.id,
                    ...film.data()
                }
            }))
            )
            .catch(err => console.log(err))
            .finally(setLoader(false))
            
        } else {

            getDocs(queryCollection)
            .then(response => setFilms(response.docs.map(film => {
                                        return {id: film.id,
                                            ...film.data()
                                        }
            }))
            )
            .catch(err => console.log(err))
            .finally(setLoader(false))
        }
    }, [categoria])
    
    return (
        <>
            {
                !loader
                ?
                <div className='items-lists-container'> 
                
                    <div className='content-container'>
                        <h1 className='greetings'>{`Hola ${ user.name !== '' ? user.name : ''}! Bienvenido al sitio`}</h1>
                        {
                        categoria
                        ? 
                        <ItemList films={films.length !== 0 && filterFilms(films, categoria)} heading={`Filtrado por: ${categoria}`}/>
                        :
                        <>
                                    
                            <ItemList films={films.length !== 0 && filterFilms(films, 'populares')} heading='Las Populares esta semana'/>

                            <ItemList films={films.length !== 0 && filterFilms(films, 'clasicos')} heading='Las Clasicas del cine'/>

                            <ItemList films={films.length !== 0 && filterFilms(films, 'recomendados')} heading='Las Recomendadas para vos'/>
                        </>
                        }
                    </div> 

                </div>
                :
                <h1 className='loader'>Loading</h1>
            }
        </>
    )
}
export default ItemListContainer