import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider dir='rtl'>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();