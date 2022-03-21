import './contact.css'


const Contact = () => {
    return ( 
        <div className="background-image-contact">
            <div className="gradient-contact">
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