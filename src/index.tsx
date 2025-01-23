import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom';

import Header from './components/header/index';
import Name from './components/name/index';
import Footer from './components/footer/index';
import SocialLinks from './components/socialLinks';
import Nav from './components/nav';
import "bootstrap-icons/font/bootstrap-icons.css";


// const nav = <Nav navItems={NavItems} />;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App  Header={Header} Name={Name} Footer={Footer} SocialLinks={SocialLinks} Nav={Nav} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
