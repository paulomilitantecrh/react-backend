import React from "react";
import FacebookLogin from "./FacebookLoginButton";
import "./Login.css";

const Login = props => {
	if(props.loggedIn) {
		return(
    	<div>
	      <div className="profile-box">
	        <button className="btn btn-primary" onClick={props.logOut}>Log Out</button>
	        <div className="column">
	          <img src={props.picture} alt={props.name} />
	          <p>Welcome <b>{props.name}</b>!</p>
	        </div>
	      </div>
	    </div>
		);
	}
	else {
		return <FacebookLogin responseFacebook={props.responseFacebook}/>;
	}
};

export default Login;
