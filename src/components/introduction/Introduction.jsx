
import '../Navbar/navbar.css';
import { Link, Outlet } from 'react-router-dom';
import './introduction.css'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const Introduction =  () => {

    const { theme } = useContext(ThemeContext)

    const [requested, SetRequested] = useState(false)
    return (
            <div className={`background-image${theme ? '-light' : ''}`}>
                <div className={`gradient${theme ? '-light' : ''}`}>
                    <div className="intro-container">
                        <div className="intro-sign">
                            <div className="intro-links">
                                <Link to={'orders'} onClick={() => SetRequested(true)} className="introduction-link">
                                    <button className='intro-btn'>Mis compras</button>
                                </Link>
                            </div>
                        </div>
                        <div className={`${requested && 'user-request'}`}>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Introduction