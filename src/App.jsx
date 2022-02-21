
import './App.css';

import Navbar from './components/navbar/Navbar';
import './components/navbar/navbar.css';

import Footer from './components/footer/Footer';
import './components/footer/footer.css';

import MainContent from './components/mainContent/MainContent';
import './components/mainContent/mainContent.css'


function App() {

  return (
    <div className="App">
      <Navbar/>

      <MainContent greetings='Hola Pili! Bienvenida al sitio!' />

      <Footer />
    </div>
  );
}

export default App;
