import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextHolder from './context/ContextHolder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextHolder>
    <App />
    </ContextHolder>
  </React.StrictMode>
);

