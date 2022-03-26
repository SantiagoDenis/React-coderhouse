
import { useState, useEffect, useContext } from 'react';

import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import './itemListContainer.css'

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import { ThemeContext } from '../../context/ThemeContext';
import Item from '../item/Item';



const ItemListContainer = ({removeIntro}) => {

    const { categoria } = useParams()

    const {theme} = useContext(ThemeContext)

    const [films, setFilms] = useState([])

    const [loader, setLoader] = useState(true)

    
    const filterFilms = (filmsArr, categoria) => {
        return filmsArr.filter((film) => film.categoria === categoria)
    }



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
        <div className='items-lists-container'>  
            <h1 className='greetings'>Hola Pili! Bienvenida al sitio</h1>
            {
            categoria
             ? 
             <ItemList films={films.length !== 0 && filterFilms(films, categoria)} heading={`Filtrado por: ${categoria}`} removeIntro={removeIntro}/>
            :
            <>
                        
                <ItemList films={films.length !== 0 && filterFilms(films, 'populares')} heading='Las Populares esta semana' removeIntro={removeIntro}/>

                <ItemList films={films.length !== 0 && filterFilms(films, 'clasicos')} heading='Las Clasicas del cine' removeIntro={removeIntro}/>

                <ItemList films={films.length !== 0 && filterFilms(films, 'recomendados')} heading='Las Recomendadas para vos' removeIntro={removeIntro}/>
            </>
            }


        </div>
    )
}
export default ItemListContainer