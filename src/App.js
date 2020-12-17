import React, { Component } from 'react'
import './App.css';
import UserInput from '../UserInput'
import UserOutput from '../UserOutput'


class App extends Component {
  state = {
    username: 'stateUserName1' 
  }

  input6ChangedHandler = (event) => {
    this.setState({userName: event.target.value});

  }

  render(){
    return (
      <div className="App">
        <UserInput changed = {this.input6ChangedHandler}  currentName={this.state.username} />
        <UserOutput userName= {this.state.username} />
        <UserOutput userName= {this.state.username}/>
        <UserOutput userName="n3"/>
      </div>
    );
  }
}

export default App;
