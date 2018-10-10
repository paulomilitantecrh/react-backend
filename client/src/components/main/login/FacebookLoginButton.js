import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Route, Redirect } from 'react-router';

class FacebookLoginButton extends Component {

	state = {
		isLoggedIn: false,
		userID: '',
		name: '',
		email: '',
		picture: ''
	}

	logOut = () => {
		this.setState({
			isLoggedIn: false,
			userID: '',
			name: '',
			email: '',
			picture: ''
		})
	}

	responseFacebook = response => {
		this.setState({
			isLoggedIn: true,
			userID: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		})
	}

	render() {

		let fbContent;

		if (this.state.isLoggedIn) {
			fbContent = (
				<div>
					<Redirect to="/list" />
					<div className="profile-box">
						<button className="btn btn-primary" onClick={this.logOut}>Log Out</button>
						<div className="column">
							<img src={this.state.picture} alt={this.state.name} />
							<p>Welcome <b>{this.state.name}</b>!</p>
						</div>
					</div>
				</div>
			);
		}
		else {
			fbContent = (
				<div className="login-box">
					<h2>Ramen Nagi Delivery</h2>
					<FacebookLogin
					appId="1033690826810672"
					autoLoad={false}
					fields="name,email,picture"
					onClick={this.componentClicked}
					callback={this.responseFacebook}
					icon="fa-facebook"
					size="small"
					disableMobileRedirect={true} />
				</div>
			);
		}
		return (
				<div>{fbContent}</div>
			);
	}
}

export default FacebookLoginButton;