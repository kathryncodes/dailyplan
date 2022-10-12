import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { BrowserRouter } from 'react-router-dom'
import { ModulesContextProvider } from './context/modulesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <ModulesContextProvider>
        <App />
      </ModulesContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
