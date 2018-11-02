import React, { Component } from "react";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import logo from "./components/nav/logo.png";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			name: "",
			email: "",
			picture: ""
		};
	}

	componentWillMount = () => {
		let session = sessionStorage.getItem("id");
		if (session) {
			this.setState({
				loggedIn: true,
			});
		}
	}

	componentDidMount = () => {
		let session = sessionStorage.getItem("id");
		if (session) {
			fetch("/users",{
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					userID: session,
				})
			})
				.then(res => res.json())
				.then(users => {
					this.logIn(users);
				});
		}
	}

	responseFacebook = response => {
		fetch("/users",{
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				userID: response.userID,
				fullName: response.name,
				email: response.email,
				picture: response.picture.data.url
			})
		})
			.then(res => res.json())
			.then(users => {
				sessionStorage.setItem("id", users[0].userID);
				this.logIn(users);
				window.location.href = "/list";
			});
	}

	logIn = data => {
		this.setState({
			loggedIn: true,
			name: data[0].name,
			email: data[0].email,
			picture: data[0].picture
		});
	}

	logOut = () => {
		this.setState({
			loggedIn: false,
			name: "",
			email: "",
			picture: ""
		});
		sessionStorage.clear();
	}

	render() {
		return(
			<BrowserRouter>
				<div className="App">
					<Nav logo={logo} alt="Ramen Nagi"/>
					<Main responseFacebook={this.responseFacebook}
						logOut={this.logOut}
						loggedIn={this.state.loggedIn}
						name={this.state.name}
						email={this.state.email}
						picture={this.state.picture}/>
					<Footer />
				</div>
			</BrowserRouter>
		);
	};
};

export default App;
