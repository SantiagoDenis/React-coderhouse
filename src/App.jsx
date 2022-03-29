
import { useState, useEffect, useContext } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Footer from './components/footer/Footer';

import ItemListContainer from './components/itemListContainer/ItemListContainer'

import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer'

import Introduction from './components/introduction/Introduction'

import Navbar from './components/Navbar/Navbar';

import Contact from './components/contact/Contact';

import Cart from './components/cart/Cart';

import CartContextProvider from './context/CartContext';
import { ThemeContext } from './context/ThemeContext';
import Dropdown from './components/dropdown/dropdown';
import Orders from './components/orders/Orders';



function App() {

  const [isOn, setIsOn] = useState(false)

  const [showDropdown, setShowDropdown] = useState(false)

  const {theme} = useContext(ThemeContext)
    
    const addIntro = () => {
      if(!isOn) {
        setIsOn(prevIsOn => !prevIsOn)
      }
    }
    const removeIntro = () => {
      if(isOn) {
        setIsOn(prevIsOn => !prevIsOn)
      }
    }

  return ( 
   
    <CartContextProvider>
    
      <BrowserRouter>
      
        <div className="App">

          <Navbar addIntro={addIntro} removeIntro={removeIntro} showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>

          {isOn && <Introduction removeIntro={removeIntro}/>}
              
          {showDropdown && <Dropdown showDropdown={showDropdown}/>}


          <div className={`main-container${theme ? '-light' : ''}`}>

            <Routes>


              <Route path='/' element={<ItemListContainer removeIntro={removeIntro}/>}/>
              <Route path='categoria/:categoria' element={<ItemListContainer />}/>

              <Route path='item/:id' element={<ItemDetailsContainer />} /> 

              <Route path='cart' element={<Cart />} />

              <Route path='contact' element={<Contact/>} />

              <Route path='orders' element={<Orders/>} />
              
              <Route path='/*' element={<Navigate to='/' replace />} /> 


            </Routes>
          </div>


          <Footer />
        </div>

      </BrowserRouter>

    </CartContextProvider>

  );
}


export default App;
