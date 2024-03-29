import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './root';
import {
  BrowserRouter,
} from "react-router-dom";
import MainContextProvider from './context/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
    <App />
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



