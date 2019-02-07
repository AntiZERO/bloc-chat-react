import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZtB6OEQ1z09eMLe8f5x-uP5oL70f7_NA",
    authDomain: "bloc-chat-react-gray.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-gray.firebaseio.com",
    projectId: "bloc-chat-react-gray",
    storageBucket: "bloc-chat-react-gray.appspot.com",
    messagingSenderId: "804605600962"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {activeRoom: ""};
  }

setActiveRoom(room) {
  this.setState({activeRoom: room})
}

  render() {
    const showMessages = this.state.activeRoom;

    return (
      <div className = "App">
      <header className = "header">
        <h1> Bloc Chat!</h1>
      </header>
      <div className="roomNav">
        <RoomList firebase={firebase} activeRoom={this.setActiveRoom.bind(this)} />
      </div>
      <main>
        <h1>{this.state.activeRoom.name}</h1>
        <div id="messageArea">
          {showMessages ? (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>) : (null) }
        </div>
      </main>
      </div>

    );
  }
}

export default App;