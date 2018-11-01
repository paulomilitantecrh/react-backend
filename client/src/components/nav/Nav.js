import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = props => (
	<nav>
		<ul>
			<li>
				<Link to="/">
					<img 
						src={props.logo} 
						alt={props.alt} 
					/>
				</Link>
			</li>
			<li><p>ラーメン凪</p></li>
		</ul>
	</nav>
);

export default Nav;
