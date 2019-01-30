import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;