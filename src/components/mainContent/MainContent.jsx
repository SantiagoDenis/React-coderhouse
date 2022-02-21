import { Icon } from '@iconify/react'
import '../itemListContainer/itemListContainer.css'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import Search from '../search/Search'
import '../search/search.css'

const MainContent = ({greetings}) => {
    return (
        <div className="main-container">
            <h1>{greetings}</h1>

            <Search />

            <ItemListContainer heading='Populares de esta semana'/>
            <ItemListContainer heading='Avalados por la critica'/>
        </div>
    )
}
export default MainContent