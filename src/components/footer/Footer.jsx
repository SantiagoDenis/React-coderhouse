import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import './footer.css'

const Footer = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`footer${theme ? '-light' : ''}`}>
            <div className="footer-container">
                <div className="links-bar">
                    <a href="#">CONTACTO</a>
                    <a href="#">API</a>
                    <a href="#">SOBRE NOSOTROS</a>
                    <a href="#">NOTICIAS</a>
                    <a href="#">
                        <Icon icon="bi:instagram" color="#9ab" />
                    </a>
                </div>
                <p className="copywrite">© Cinespoilers. Hecho por fans en Argentina. Datos de peliculas de la api TMDb.</p>
            </div>
        </div>
    )
}
export default Footer