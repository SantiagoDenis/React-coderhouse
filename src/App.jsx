
import { useState, useEffect } from 'react';

import fakeApi from './helpers/promise';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Footer from './components/footer/Footer';
import './components/footer/footer.css';

import ItemListContainer from './components/itemListContainer/ItemListContainer'
import './components/itemListContainer/itemListContainer.css'


import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer'
import './components/itemDetailsContainer/itemDetailsContainer.css'

import Introduction from './components/introduction/Introduction'
import './components/introduction/introduction.css'

import Navbar from './components/navbar/Navbar';
import './components/navbar/navbar.css'
import Contact from './components/contact/Contact';
import './components/contact/contact.css'
import Cart from './components/cart/Cart';
import './components/cart/cart.css';

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
    <BrowserRouter>
    
        <div className="App">

          <Navbar addIntro={addIntro} removeIntro={removeIntro}/>

          {isOn && <Introduction removeIntro={removeIntro}/>}

          <div className="main-container">

            <Routes>


              <Route path='/' element={<ItemListContainer removeIntro={removeIntro}/>}/>
              <Route path='categoria/:categoria' element={<ItemListContainer />}/>

              <Route path='item/:id' element={<ItemDetailsContainer films={films} />} /> 

              <Route path='cart' element={<Cart films={films}/>} />

              <Route path='contact' element={<Contact/>} />
              
              <Route path='/*' element={<Navigate to='/' replace />} /> 


            </Routes>
          </div>


          <Footer />
        </div>

    </BrowserRouter>
  );
}

export default App;
