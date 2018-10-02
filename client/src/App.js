import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Main mainLoginStatus={this.onFacebookLogin}/>
        {/*<h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}*/}
      </div>
    );
  }
}

export default App;
