import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
