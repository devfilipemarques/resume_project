import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/Theme.css';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
    <Sidebar/>
    </main>
  </React.StrictMode>
);

reportWebVitals();
