import { useContext } from 'react';
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import CartWidget from '../cartWidget/CartWidget';
import './navbar.css'
import { ThemeContext } from '../../context/ThemeContext';
import { Icon } from '@iconify/react';

const Navbar = ({ showDropdown, setShowDropdown}) => {

    
    const {theme, setTheme} = useContext(ThemeContext)
    
    const { isLogged } = useContext(CartContext)
    
    //In the nav, the user sets the theme that is most comfortable with. That is this function for.
    const handleClickToggle = () => {
        setTheme( prevTheme => !prevTheme)
    }

    //Note: From now on, all the classes will be conditional depending on the theme the user choosed.
    
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">
                        <svg width="195" height="39.531557718912765" viewBox="0 0 195 39.531557718912765" className="css-1j8o68f"><defs id="SvgjsDefs2409"></defs><g id="SvgjsG2410" featurekey="v37d4h-0" transform="matrix(0.6111111111111112,0,0,0.6111111111111112,-3.055555555555556,-10.789777861701118)" fill="#780d16"><path xmlns="http://www.w3.org/2000/svg" d="M37.345,17.656C19.481,17.656,5,32.138,5,50c0,17.863,14.481,32.344,32.344,32.344S69.688,67.863,69.688,50  C69.688,32.138,55.208,17.656,37.345,17.656z M37.345,20.584c4.35,0,7.876,3.526,7.876,7.876s-3.526,7.876-7.876,7.876  s-7.876-3.526-7.876-7.876S32.995,20.584,37.345,20.584z M37.345,55.098c-2.814,0-5.098-2.283-5.098-5.098  c0-2.816,2.284-5.098,5.098-5.098s5.098,2.282,5.098,5.098C42.442,52.814,40.159,55.098,37.345,55.098z M41.825,57.848  c-0.537,0.314-1.223,0.133-1.538-0.402c-0.313-0.535-0.131-1.225,0.403-1.536c0.535-0.314,1.224-0.134,1.536,0.403  C42.54,56.846,42.359,57.535,41.825,57.848z M34.344,57.723c-0.308,0.537-0.994,0.727-1.532,0.419  c-0.54-0.308-0.727-0.995-0.419-1.532c0.306-0.539,0.991-0.727,1.532-0.419C34.463,56.496,34.65,57.181,34.344,57.723z   M32.179,43.579c-0.314-0.536-0.133-1.224,0.403-1.537c0.535-0.313,1.223-0.133,1.536,0.402c0.313,0.536,0.132,1.224-0.403,1.538  C33.181,44.294,32.49,44.114,32.179,43.579z M42.297,43.766c-0.308,0.539-0.994,0.727-1.533,0.419  c-0.538-0.307-0.727-0.992-0.419-1.532c0.308-0.539,0.995-0.726,1.533-0.419C42.417,42.541,42.605,43.227,42.297,43.766z   M22.569,67.532c-3.766,2.174-8.583,0.884-10.758-2.882c-2.175-3.769-0.885-8.586,2.884-10.761  c3.766-2.175,8.583-0.885,10.758,2.882C27.628,60.54,26.338,65.356,22.569,67.532z M25.453,43.109  c-2.175,3.768-6.992,5.058-10.758,2.883C10.927,43.817,9.637,39,11.812,35.233c2.175-3.767,6.992-5.057,10.758-2.882  C26.338,34.525,27.628,39.342,25.453,43.109z M28.19,50.238c-0.004-0.62,0.495-1.125,1.118-1.129  c0.619-0.004,1.125,0.496,1.128,1.116c0.005,0.621-0.495,1.126-1.116,1.13C28.699,51.358,28.193,50.859,28.19,50.238z   M37.345,79.415c-4.35,0-7.876-3.525-7.876-7.875c0-4.351,3.526-7.878,7.876-7.878s7.876,3.527,7.876,7.878  C45.221,75.89,41.695,79.415,37.345,79.415z M45.382,51.266c-0.618,0.004-1.127-0.497-1.13-1.117  c-0.003-0.621,0.497-1.125,1.118-1.13c0.621-0.003,1.125,0.498,1.127,1.117C46.503,50.757,46.002,51.262,45.382,51.266z   M52.001,32.351c3.769-2.175,8.585-0.884,10.761,2.882c2.175,3.768,0.883,8.584-2.884,10.759s-8.584,0.885-10.759-2.883  C46.944,39.342,48.235,34.525,52.001,32.351z M62.762,64.65c-2.176,3.766-6.992,5.056-10.761,2.882  c-3.766-2.176-5.057-6.992-2.882-10.761c2.175-3.767,6.992-5.057,10.759-2.882S64.937,60.882,62.762,64.65z"></path><path xmlns="http://www.w3.org/2000/svg" d="M66.231,69.424C57.14,80.331,36.222,82.05,36.222,82.05c-0.764,0.115,19.694,2.589,34.848-9.165  C86.223,61.129,95,61.34,95,61.34V46.661C85.522,48.599,75.32,58.517,66.231,69.424z M77.802,59.947  c2.016-1.968,4.008-3.77,6.023-5.302v7.522c-1.813,0.917-3.837,2.068-6.023,3.493V59.947z M76.579,61.151v5.332  c-1.591,1.083-3.254,2.304-4.985,3.696v-3.945C73.297,64.493,74.95,62.779,76.579,61.151z M66.452,71.339  c1.345-1.277,2.646-2.572,3.919-3.861v3.669c-1.433,1.117-2.824,2.095-4.16,2.95v-2.539C66.292,71.481,66.371,71.416,66.452,71.339z   M61.389,75.428c1.157-0.787,2.361-1.692,3.602-2.765v2.193c-1.262,0.758-2.466,1.406-3.602,1.961V75.428z M60.167,77.389  c-1.452,0.654-2.769,1.149-3.922,1.522v-0.578c1.17-0.527,2.492-1.217,3.922-2.107V77.389z M51.187,80.007  c0,0,1.481-0.22,3.836-1.153v0.428C52.335,80.035,50.862,80.054,51.187,80.007z M85.049,61.574v-7.827  c2.643-1.845,5.346-3.186,8.225-3.747l0.014,8.626C93.287,58.626,90.135,59.157,85.049,61.574z"></path></g><g id="SvgjsG2411" featurekey="UxBHKT-0" transform="matrix(0.9293681747131619,0,0,0.9293681747131619,74.2007433010573,6.706319139182939)" fill={`${theme ? 'black' : 'white'}`}><path d="M3.86 19.51 q-1.38 -0.77 -2.19 -2.09 t-0.81 -2.88 t0.81 -2.87 t2.18 -2.08 t2.99 -0.77 q1.74 0 3.15 0.83 t2.25 2.37 l-2.7 1.06 q-0.48 -0.82 -1.18 -1.23 t-1.52 -0.41 q-1.3 0 -2.15 0.88 t-0.85 2.22 t0.86 2.22 t2.16 0.88 q1.8 0 2.78 -1.6 l2.54 1 q-1.58 3.24 -5.32 3.24 q-1.62 0 -3 -0.77 z M17.18 7.369999999999999 q-0.48 0.47 -1.16 0.47 q-0.7 0 -1.19 -0.47 t-0.49 -1.15 q0 -0.66 0.49 -1.13 t1.19 -0.47 q0.68 0 1.16 0.47 t0.48 1.13 q0 0.68 -0.48 1.15 z M14.52 9.02 l3 0 l0 10.98 l-3 0 l0 -10.98 z M29.69 10.02 q1.03 1.22 1.03 3.48 l0 6.5 l-3.06 0 l0 -6.5 q0 -2.22 -2.12 -2.22 q-0.82 0 -1.48 0.65 t-0.62 2.25 l0 5.82 l-2.98 0 l0 -11 l2.98 0 l0 0.98 q0.54 -0.54 1.36 -0.86 t1.58 -0.32 q2.28 0 3.31 1.22 z M36.45 19.74 q-1.37 -0.54 -2.35 -1.83 t-0.98 -3.37 t0.99 -3.36 t2.37 -1.82 t2.62 -0.54 q1.44 0 2.74 0.64 t2.13 1.88 t0.87 2.94 q0 0.52 -0.02 0.9 t-0.04 0.48 l-8.68 0 q0.24 1.16 1.2 1.58 t1.8 0.42 q1.08 0 1.72 -0.39 t1.1 -0.89 l2.32 1.34 q-1.88 2.56 -5.14 2.56 q-1.28 0 -2.65 -0.54 z M37.06 12.05 q-0.78 0.61 -0.88 1.49 l5.5 0 q-0.06 -0.52 -0.4 -1 t-0.91 -0.79 t-1.29 -0.31 q-1.24 0 -2.02 0.61 z M46.64000000000001 18.54 l1.56 -2.08 q0.72 0.5 1.68 0.84 t1.88 0.34 q0.68 0 1.13 -0.28 t0.45 -0.7 t-0.51 -0.59 t-0.99 -0.24 t-0.62 -0.09 q-1.2 -0.2 -2.07 -0.48 t-1.58 -1 t-0.71 -1.98 q0 -2.08 1.51 -2.78 t3.03 -0.7 q1.3 0 2.4 0.38 t2.18 1.2 l-1.56 2.04 q-0.78 -0.46 -1.54 -0.74 t-1.58 -0.28 q-0.5 0 -0.97 0.22 t-0.47 0.6 q0 0.48 0.65 0.68 t1.43 0.3 q1.4 0.24 2.24 0.5 t1.49 0.97 t0.65 2.01 q0 1.72 -1.18 2.65 t-3.34 0.93 q-3 0 -5.16 -1.72 z M61.66000000000001 10.1 q0.38 -0.52 1.31 -0.93 t2.03 -0.41 q1.7 0 2.95 0.76 t1.91 2.07 t0.66 2.91 t-0.66 2.91 t-1.91 2.07 t-2.95 0.76 q-1.14 0 -2.01 -0.39 t-1.33 -0.99 l0 4.68 l-2.96 0 l0 -14.54 l2.96 0 l0 1.1 z M62.36000000000001 16.75 q0.82 0.87 2.2 0.87 q1.4 0 2.21 -0.87 t0.81 -2.25 q0 -1.34 -0.83 -2.22 t-2.19 -0.88 q-1.4 0 -2.21 0.83 t-0.81 2.27 q0 1.38 0.82 2.25 z M75.41000000000001 19.49 q-1.37 -0.77 -2.17 -2.09 t-0.8 -2.88 q0 -1.54 0.8 -2.86 t2.17 -2.09 t2.99 -0.77 t3 0.77 t2.19 2.09 t0.81 2.86 q0 1.56 -0.81 2.88 t-2.19 2.09 t-3 0.77 t-2.99 -0.77 z M76.88000000000001 11.83 q-0.7 0.41 -1.1 1.12 t-0.4 1.57 q0 0.9 0.39 1.61 t1.08 1.12 t1.55 0.41 q0.84 0 1.53 -0.41 t1.09 -1.13 t0.4 -1.6 q0 -0.86 -0.4 -1.57 t-1.09 -1.12 t-1.53 -0.41 q-0.82 0 -1.52 0.41 z M89.64000000000001 7.369999999999999 q-0.48 0.47 -1.16 0.47 q-0.7 0 -1.19 -0.47 t-0.49 -1.15 q0 -0.66 0.49 -1.13 t1.19 -0.47 q0.68 0 1.16 0.47 t0.48 1.13 q0 0.68 -0.48 1.15 z M86.98 9.02 l3 0 l0 10.98 l-3 0 l0 -10.98 z M92.96000000000001 4.880000000000001 l3 0 l0 15.12 l-3 0 l0 -15.12 z M101.63 19.74 q-1.37 -0.54 -2.35 -1.83 t-0.98 -3.37 t0.99 -3.36 t2.37 -1.82 t2.62 -0.54 q1.44 0 2.74 0.64 t2.13 1.88 t0.87 2.94 q0 0.52 -0.02 0.9 t-0.04 0.48 l-8.68 0 q0.24 1.16 1.2 1.58 t1.8 0.42 q1.08 0 1.72 -0.39 t1.1 -0.89 l2.32 1.34 q-1.88 2.56 -5.14 2.56 q-1.28 0 -2.65 -0.54 z M102.24 12.05 q-0.78 0.61 -0.88 1.49 l5.5 0 q-0.06 -0.52 -0.4 -1 t-0.91 -0.79 t-1.29 -0.31 q-1.24 0 -2.02 0.61 z M117.68 11.87 q-0.86 0.21 -1.58 0.99 t-0.72 2.28 l0 4.86 l-2.98 0 l0 -11 l2.98 0 l0 1.46 q0.74 -0.98 1.81 -1.33 t1.95 -0.33 l0 2.92 q-0.6 -0.06 -1.46 0.15 z M120.30000000000001 18.54 l1.56 -2.08 q0.72 0.5 1.68 0.84 t1.88 0.34 q0.68 0 1.13 -0.28 t0.45 -0.7 t-0.51 -0.59 t-0.99 -0.24 t-0.62 -0.09 q-1.2 -0.2 -2.07 -0.48 t-1.58 -1 t-0.71 -1.98 q0 -2.08 1.51 -2.78 t3.03 -0.7 q1.3 0 2.4 0.38 t2.18 1.2 l-1.56 2.04 q-0.78 -0.46 -1.54 -0.74 t-1.58 -0.28 q-0.5 0 -0.97 0.22 t-0.47 0.6 q0 0.48 0.65 0.68 t1.43 0.3 q1.4 0.24 2.24 0.5 t1.49 0.97 t0.65 2.01 q0 1.72 -1.18 2.65 t-3.34 0.93 q-3 0 -5.16 -1.72 z"></path></g></svg>                    
                    </NavLink>
                </div>
                <div className="header-links">
                    <div className={`links${theme ? '-light' : ''}`} onClick={() => setShowDropdown(prevDropdown => !prevDropdown)}>
                        {/* conditional rendering to show the dropdown handler with different icons depending whether the user clicked it or not. */}
                        {
                            !showDropdown
                            ?
                                <p className={`links${theme ? '-light' : ''}`}>Categorias<Icon icon="ic:outline-arrow-drop-down" /></p>
                            :
                                <p className={`links${theme ? '-light' : ''}`}>Categorias<Icon icon="ic:baseline-arrow-drop-up" /></p>
                        }
                    </div>
                    {/* Conditional rendering to show if the user is logged or not */}
                    {
                        !isLogged
                        ?
                            <NavLink to={'contact'}>
                                <p className={`links${theme ? '-light' : ''}`}>Iniciar Sesion</p> 
                            </NavLink>
                        :
                        <>
                            <NavLink to={'user'}>
                                <p className={`links${theme ? '-light' : ''}`}>Mi Perfil</p>
                            </NavLink>
                        </>
                    }
                    <button className={`btn-links${theme ? '-light' : ''}`} onClick={handleClickToggle}>{theme ? <Icon className='theme-icon' icon="ic:baseline-nightlight" /> : <Icon className='theme-icon' icon="ic:baseline-light-mode" />}</button>
                    <NavLink to={'cart'}>
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </nav> 
     );
}
 
export default Navbar;