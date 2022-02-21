import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <div className="footer">
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