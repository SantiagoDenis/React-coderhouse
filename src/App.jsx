
import './App.css';

import { useState, useEffect } from 'react';

import Navbar from './components/navbar/Navbar';
import './components/navbar/navbar.css';

import Footer from './components/footer/Footer';
import './components/footer/footer.css';

import MainContent from './components/mainContent/MainContent';
import './components/mainContent/mainContent.css'

import fakeApi from './helpers/promise';

function App() {

  const [films, setFilms] = useState([])
  const [loader, setLoader] = useState(true)
  
  useEffect( () => {

      fakeApi
      .then(response => setFilms(response))
      .catch(err => alert(err))
      .finally(setLoader(false))

  }, [])



  return (
    <div className="App">
      <Navbar/>

      <MainContent greetings='Hola Pili! Bienvenida al sitio!' films={films} loader={loader} />

      <Footer />
    </div>
  );
}

export default App;
