import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar/navbar';
import Home from './home/home';
import Home2 from './home-part2/part2';
import Home3 from './home-part3/home3';
import Home4 from './home-part4/home4';
import Service from './service/service';
import Latest from './latest-projects/latest';
import Galery from './galery/galery';
import Footer from './footer/footer';
import { Main } from './footer/footer-style';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main>
      <Navbar/>
    <Home/>
    <Home2/>
    <Home3/>
    <Home4/>
    <Service/>
    <Latest/>
    <Galery/>
    <Footer/>
    </Main>
   
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
