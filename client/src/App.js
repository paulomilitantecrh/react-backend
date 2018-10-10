import React from 'react';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom'
import logo from './components/nav/logo.png';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Nav logo={logo} alt="Ramen Nagi"/>
      <Main />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
