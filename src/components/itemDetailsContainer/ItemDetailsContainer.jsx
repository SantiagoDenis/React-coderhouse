

import { useState, useEffect } from 'react'
import '../itemCount/itemCount.css'

import ItemDetails from '../itemDetails/ItemDetails'
import '../itemDetails/itemDetails.css'

const ItemDetailsContainer = ({func, films}) => {
    const [load, setLoad] = useState('')
    
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
        <div className="itemDetails-container">
            <ItemDetails func={func} films={films}/>

        </div>
        :
        <h1>Cargando contenido</h1>
    )
}
export default ItemDetailsContainer 