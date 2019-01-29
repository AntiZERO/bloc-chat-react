import React, { Component } from 'react';
import 

class RoomList extends Component {
	contructor(props) {
		super(props);
		this.state = { 
			rooms: []
		};
this.roomsRef = this.props.firebase.data().ref('rooms');
	}
}

export default RoomList;