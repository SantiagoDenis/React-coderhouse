
import './App.css';

import Navbar from './components/navbar/Navbar';
import './components/navbar/navbar.css';

import Footer from './components/footer/Footer';
import './components/footer/footer.css';

import MainContent from './components/mainContent/MainContent';
import './components/mainContent/mainContent.css'


function App() {

  
  const fakeDatabase = {
    id: 1,
    price: 700,
    filmName: 'Fight Club',
    sinopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At veniam officiis id expedita quia doloremque, porro reiciendis sit? Totam unde ad, deleniti ab optio molestiae in vitae earum dolorem deserunt?',
    stock: Math.round(Math.random()  * 5)
}

  return (
    <div className="App">
      <Navbar/>

      <MainContent greetings='Hola Pili! Bienvenida al sitio!' data={fakeDatabase} />

      <Footer />
    </div>
  );
}

export default App;
