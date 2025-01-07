import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast'
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App></App>
        {/* <BrowserRouter> */}
            
            {/* <Toaster></Toaster> */}
        {/* </BrowserRouter> */}
    </React.StrictMode>
);