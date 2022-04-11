import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './context/ThemeContext';
import firestoreApp from './firebase/config';

firestoreApp()
//Index is the parent element of app.

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
