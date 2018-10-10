import React, { Component } from 'react';
import Login from "./login/Login";
import ShopList from "./list/ShopList";
import Detail from "./detail/Detail";
import { Route } from 'react-router-dom';
import "./Main.css"

class Main extends Component {
	render() {
		return (
			<div className="main">
				<div className="container main-content">
					<Route exact path="/" component={Login} />
					<Route exact path="/list" component={ShopList} />
					<Route path ="/list/:id" component={Detail} />
				</div>
			</div>
		);
	}
}

export default Main;
