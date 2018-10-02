import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.png';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.logo = logo;
		this.alt = "Ramen Nagi"
	}

  render() {
    return (
      <nav>
      <ul>
        <li>
        	<img 
		        src={this.logo} 
		        alt={this.alt} 
      		/>
        </li>
        <li><p>ラーメン凪</p></li>
      </ul>
      </nav>
    );
  }
}

export default Nav;
