import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
    	<BrowserRouter>
	      <div className="App">
	        <Nav />
	        <Main />
	        <Footer />
	      </div>
      </BrowserRouter>
    );
  }
}

export default App;
