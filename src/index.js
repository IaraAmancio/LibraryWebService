import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Buffer } from 'buffer';
import path from 'path-browserify';
import './index.css'

window.Buffer = Buffer; // Se precisar de Buffer
window.path = path; // Substitui o módulo 'path' nativo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
