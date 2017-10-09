import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import SocialCardList from "./components/social-card-list"
import SocialForm from "./components/social-form"

class App extends Component {
  constructor(props) {
    super(props);
  }

	render() {
	  return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div>
          <SocialCardList socialCards={this.props.socialCards} />
          <SocialForm />
        </div>
      </div>
    );
  }
}

export default App;
