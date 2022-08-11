import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/theme.css';
import reportWebVitals from './reportWebVitals';
import Main from './main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
