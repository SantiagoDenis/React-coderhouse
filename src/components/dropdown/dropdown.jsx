import { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import '../Navbar/navbar.css'
import { ThemeContext } from '../../context/ThemeContext';
import './dropdown.css'


//Dropdown component that shows to the user the different categories there are available.
const Dropdown = ({showDropdown}) => {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            {
            showDropdown
            &&
            <>
                <div className="dropdown" >
                    <NavLink className={`links${theme ? '-light' : ''}`} to={'categoria/populares'}>Populares</NavLink>
                    <NavLink className={`links${theme ? '-light' : ''}`} to={'categoria/clasicos'}>Clasicas</NavLink>
                    <NavLink className={`links${theme ? '-light' : ''}`} to={'categoria/recomendados'}>Recomendadas</NavLink>
                </div>
            </>
        }
        </>
    )
}
export default Dropdown