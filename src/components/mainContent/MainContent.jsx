
import '../itemListContainer/itemListContainer.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Search from '../search/Search'
import '../search/search.css'
import Modal from '../modal/Modal'
import '../modal/modal.css'
import { useState } from 'react'

const MainContent = ({greetings, films, loader}) => {
    const [isModalShown, setIsModalShown] = useState(false)

    const handleOptions = () => {
        setIsModalShown( prevIsModalShown => !prevIsModalShown)
    }
    
    return (
        <div className="main-container">
            <h1 className='greetings'>{greetings}</h1>

            <Search />

            <ItemListContainer heading='Populares de esta semana' func={handleOptions} films={films} loader={loader}/>
                {isModalShown && <Modal func={handleOptions} films={films} />}
            <ItemListContainer heading='Avalados por la critica' func={handleOptions} films={films} loader={loader}/>
        </div>
    )
}
export default MainContent