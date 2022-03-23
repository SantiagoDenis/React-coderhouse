import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './contact.css'


const Contact = () => {

    const { theme } = useContext(ThemeContext)

    return ( 
        <div className={`background-image-contact${theme ? '-light' : ''}`}>
            <div className={`gradient-contact${theme ? '-light' : ''}`}>
                <div className="form-container">
                    <h1 className="contact-title">Crea tu perfil!</h1>
                    <form>

                        <input type="text" placeholder="Nombre" required/>
                        <input type="text" placeholder="Apellido" required/>
                        <input type='email' placeholder="Email" required/>
                        <button className="contact-btn">Enviar</button>
                        
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;