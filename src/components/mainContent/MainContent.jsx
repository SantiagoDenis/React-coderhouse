
import '../itemListContainer/itemListContainer.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Search from '../search/Search'
import '../search/search.css'
import ItemDetailsContainer from '../itemDetailsContainer/ItemDetailsContainer'
import '../itemDetailsContainer/itemDetailsContainer.css'
import { useState } from 'react'

const MainContent = ({greetings, films, loader}) => {
    const [isItemDetailsContainerShown, setIsItemDetailsContainerShown] = useState(false)

    const handleOptions = () => {
        setIsItemDetailsContainerShown( prevIsItemDetailsContainerShown => !prevIsItemDetailsContainerShown)
    }
    
    return (
        <div className="main-container">
            <h1 className='greetings'>{greetings}</h1>

            <Search />

            <ItemListContainer heading='Populares de esta semana' func={handleOptions} films={films} loader={loader}/>
            {isItemDetailsContainerShown && <ItemDetailsContainer func={handleOptions} films={films} />}
            <ItemListContainer heading='Avalados por la critica' func={handleOptions} films={films} loader={loader}/>
        </div>
    )
}
export default MainContent