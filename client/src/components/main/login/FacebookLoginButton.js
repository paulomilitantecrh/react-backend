import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class FacebookLoginButton extends Component {
	render() {

  	return(
			<div className="login-box">
  			<h2>Ramen Nagi Delivery</h2>
	  		<FacebookLogin
	  		appId="1033690826810672"
	  		autoLoad={false}
	  		fields="name,email,picture"
	  		callback={this.props.responseFacebook}
	  		icon="fa-facebook"
	  		size="small"
	  		disableMobileRedirect={true} />
  		</div>
		);
	}
}

export default FacebookLoginButton;