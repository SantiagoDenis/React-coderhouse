import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './contact.css'
import ContactForm from '../contactForm/ContactForm';


const Contact = () => {


    const { theme } = useContext(ThemeContext)

    
    

    return ( 
        <div className={`background-image-contact${theme ? '-light' : ''}`}>
            <div className={`gradient-contact${theme ? '-light' : ''}`}>
                <ContactForm/>
            </div>
        </div>
     );
}
 
export default Contact;