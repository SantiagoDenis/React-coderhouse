
import '../itemCount/itemCount.css'

import ItemDetails from '../itemDetails/ItemDetails'
import './itemDetailsContainer.css'


import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ItemDetailsContainer = ({films}) => {

    const {id} = useParams()

    const { theme } = useContext(ThemeContext)

    const [load, setLoad] = useState()
    useEffect( () => {

        const fakeRequest = new Promise ( (resolve) => {
            setTimeout( () => {
                const url = 'films'
                if (url === 'films') {
                    resolve('200')
                }
            }, 2000)
        })
        fakeRequest.then(res => {
            setLoad(res)
        })
    }, [])

    return (
        load === '200'
        ?
        <div className="details-wrapper">
            <div className="background-image-details">
                <div className={`gradient-details${theme ? '-light' : ''}`}>
                </div>
            </div>
            <div className="itemDetails-container">
            <ItemDetails films={films} id={id}/>

            </div>
        </div>
        :
        <div className="loader-container">
            <h1>Cargando contenido</h1>
        </div>

    )
}
export default ItemDetailsContainer 