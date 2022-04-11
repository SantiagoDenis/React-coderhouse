//Hooks:
import { useState, useContext } from 'react';
//React router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//Contexts
import { ThemeContext } from './context/ThemeContext';
import CartContextProvider from './context/CartContext';
//Alert library
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//CSS
import './App.css';
//Components
import Navbar from './components/Navbar/Navbar';
import Dropdown from './components/dropdown/dropdown';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer'
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import Introduction from './components/introduction/Introduction'
import Orders from './components/orders/Orders';
import Footer from './components/footer/Footer';

//The app function its the one i use to render all the other child components, together with Routes from react router and the cart context
const App = () => {

  const [showDropdown, setShowDropdown] = useState(false)

  const {theme} = useContext(ThemeContext)

  return ( 

    <CartContextProvider>

          <BrowserRouter>
          
            <div className="App">

              <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>
                  
              {showDropdown && <Dropdown showDropdown={showDropdown}/>}

              <div className={`main-container${theme ? '-light' : ''}`}>

                <Routes>

                  <Route path='/' element={<ItemListContainer/>}/>

                  {/*IMPORTANT: Category is in spanish because the UI of the page is that way. And I consider really important for the user to see this route in the same language so that it knows where he is just looking at the url. Its not a mistake, its intentional*/}
                  <Route path='categoria/:categoria' element={<ItemListContainer />}/>

                  <Route path='item/:id' element={<ItemDetailsContainer />} /> 

                  <Route path='cart' element={<Cart />} />

                  <Route path='contact' element={<Contact/>} />

                  <Route path='user' element={<Introduction/>}>

                    <Route path='orders' element={<Orders/>} />

                  </Route>
                  
                  <Route path='/*' element={<Navigate to='/' replace />} /> 

                </Routes>
              </div>

              <Footer />

              <ToastContainer/>

            </div>

          </BrowserRouter>

    </CartContextProvider>

  );
}


export default App;
