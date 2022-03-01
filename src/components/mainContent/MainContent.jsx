
import '../itemListContainer/itemListContainer.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Search from '../search/Search'
import '../search/search.css'
import Modal from '../modal/Modal'
import '../modal/modal.css'
import { useState } from 'react'

const MainContent = ({greetings, data, setItems}) => {
    const [isModalShown, setIsModalShown] = useState(false)

    const handleOptions = () => {
        setIsModalShown( prevIsModalShown => !prevIsModalShown)
    }
    
    return (
        <div className="main-container">
            <h1 className='greetings'>{greetings}</h1>

            <Search />

            <ItemListContainer heading='Populares de esta semana' func={handleOptions}/>
                {isModalShown && <Modal func={handleOptions} data={data} setItems={setItems} />}
            <ItemListContainer heading='Avalados por la critica'/>
        </div>
    )
}
export default MainContent