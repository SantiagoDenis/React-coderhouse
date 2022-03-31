import './contactForm.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const ContactForm = () => {

    const { user, setUserData, updateUserData } = useContext(CartContext)

    return ( 
        <div className="form-container">
            <h1 className="contact-title">Crea tu perfil!</h1>
            <form>

                <input type="text" placeholder="Nombre" required name='name' onChange={setUserData} value={user.name}/>
                <input type="text" placeholder="Telefono" required name='phone' onChange={setUserData} value={user.phone}/>
                <input type='email' placeholder="Email" required name='email' onChange={setUserData} value={user.email}/>
                <input type='email' placeholder="Confirma tu email" required name='emailConfirmation' onChange={setUserData} value={user.emailConfirmation}/>
                <button className="contact-btn" onClick={updateUserData}>Enviar</button>
                
            </form>
        </div>
     );
}
 
export default ContactForm;