
import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import './itemListContainer.css'

import fakeApi from '../../helpers/promise';

import Search from '../search/Search';



const ItemListContainer = ({removeIntro}) => {

    const { categoria } = useParams()


    const [films, setFilms] = useState([])
    const [loader, setLoader] = useState(true)

    
    const filterFilms = (filmsArr, categoria) => {
        return filmsArr.filter((film) => film.categoria === categoria)
    }


    useEffect( () => {
  
        fakeApi
        .then(response => setFilms(response))
        .catch(err => alert(err))
        .finally(setLoader(false))
  
    }, [])


    return (
        <>  
            <h1 className='greetings'>Hola Pili! Bienvenida al sitio</h1>
            <Search/>
            {categoria
             ? 
             <ItemList films={films.length !== 0 && filterFilms(films, categoria)} heading={`Las ${categoria} de esta semana`} removeIntro={removeIntro}/>
            :
            <>
                <ItemList films={films.length !== 0 && filterFilms(films, 'populares')} heading='Las Populares esta semana' removeIntro={removeIntro}/>

                <ItemList films={films.length !== 0 && filterFilms(films, 'clasicos')} heading='Las Clasicas del cine' removeIntro={removeIntro}/>
            </>
            }


        </>
    )
}
export default ItemListContainer