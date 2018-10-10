import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'

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
        <Link to="/">
        	<img 
		        src={this.logo} 
		        alt={this.alt} 
      		/>
        </Link>
        </li>
        <li><p>ラーメン凪</p></li>
      </ul>
      </nav>
    );
  }
}

export default Nav;
