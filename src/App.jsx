
import { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import fakeApi from './helpers/promise';

import './App.css';

import Footer from './components/footer/Footer';

import ItemListContainer from './components/itemListContainer/ItemListContainer'

import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer'

import Introduction from './components/introduction/Introduction'

import Navbar from './components/Navbar/Navbar';

import Contact from './components/contact/Contact';

import Cart from './components/cart/Cart';

import CartContextProvider from './context/CartContext';



function App() {

  const [films, setFilms] = useState([])
  const [isOn, setIsOn] = useState(false)
  
  useEffect( () => {

      fakeApi
      .then(response => setFilms(response))
      .catch(err => alert(err))

    }, [])

    
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

          <Navbar addIntro={addIntro} removeIntro={removeIntro}/>

          {isOn && <Introduction removeIntro={removeIntro}/>}

          <div className="main-container">

            <Routes>


              <Route path='/' element={<ItemListContainer removeIntro={removeIntro}/>}/>
              <Route path='categoria/:categoria' element={<ItemListContainer />}/>

              <Route path='item/:id' element={<ItemDetailsContainer films={films} />} /> 

              <Route path='cart' element={<Cart />} />

              <Route path='contact' element={<Contact/>} />
              
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
