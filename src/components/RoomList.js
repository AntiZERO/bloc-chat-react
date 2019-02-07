import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rooms: [],
            newRoom: "",
            name: ""
        }; 
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat(room) });
        });
    }

    handleChange(event) {
        this.setState({ newRoom: event.target.value});
    }

    createRoom(event) {
        event.preventDefault();
        this.roomsRef.push({
            name: this.state.newRoom
        });
    }

    selectRoom(key) {
        this.props.activeRoom(key);
    }

    render() { 
    
        return (
            <section>
                <div>
                    <h3>Rooms:</h3>
                    <ul>
                        {this.state.rooms.map((room) => {
                            return (
                                <div key={room.key} onClick={(event) => this.selectRoom(room, event)}>{room.name}</div>
                            )
                        })}
                    </ul>
                </div>
                <form id="createNewRoom">
                    <input type="text" value={this.state.newRoom} onChange={(event) => this.handleChange(event)} />
                    <input type="submit" onClick={(event) => this.createRoom(event)} />
                </form>
            </section>
        );
    }
}
export default RoomList;
