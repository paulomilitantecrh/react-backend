import React from "react";
import Login from "./login/Login";
import ShopList from "./list/ShopList";
import Detail from "./detail/Detail";
import { Route } from "react-router-dom";
import "./Main.css";

const Main = props => {

	let responseFacebook = props.responseFacebook;
	let logOut = props.logOut;
	let loggedIn = props.loggedIn;
	let name = props.name;
	let email = props.email;
	let picture = props.picture;

	return(<div className="main">
		<div className="container main-content">
			<Route exact path="/"
				render={(props) => <Login 
					responseFacebook={responseFacebook} 
					logOut={logOut}
					loggedIn={loggedIn}
					name={name}
					email={email}
					picture={picture}/>} />
			<Route exact path="/list"
				render={(props) => <ShopList 
					loggedIn={loggedIn}/>} />
			<Route path ="/list/:id" component={Detail} />
		</div>
	</div>);
};

export default Main;
