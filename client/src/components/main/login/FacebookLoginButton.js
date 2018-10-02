import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

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
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}!</h2>
          <p>Email: {this.state.email}</p>
          <button onClick={this.logOut}>Log Out</button>
        </div>
      );
    }
    else {
      fbContent = (
        <div>
          <h2>Ramen Nagi Delivery</h2>
          <FacebookLogin
          appId="1033690826810672"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          icon="fa-facebook" />
        </div>
      );
    }
    return (
        <div>{fbContent}</div>
      );
  }
}

export default FacebookLoginButton;