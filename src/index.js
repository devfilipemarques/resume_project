import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/theme.css';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/sidebar';
import Content from './content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main>
    <Sidebar/>
    <Content/>
    </main>
  </React.StrictMode>
);

reportWebVitals();
