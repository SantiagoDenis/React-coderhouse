import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ThemeContext } from '../../context/ThemeContext';
import './contact.css'


const Contact = () => {

    const { user, setUserData, updateUserData } = useContext(CartContext)

    const { theme } = useContext(ThemeContext)

    
    

    return ( 
        <div className={`background-image-contact${theme ? '-light' : ''}`}>
            <div className={`gradient-contact${theme ? '-light' : ''}`}>
                <div className="form-container">
                    <h1 className="contact-title">Crea tu perfil!</h1>
                    <form>

                        <input type="text" placeholder="Nombre" required name='name' onChange={setUserData} value={user.name}/>
                        <input type="text" placeholder="Telefono" required name='phone' onChange={setUserData} value={user.phone}/>
                        <input type='email' placeholder="Email" required name='email' onChange={setUserData} value={user.email}/>
                        <button className="contact-btn" onClick={updateUserData}>Enviar</button>
                        
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;