import React from "react";
import '../../../App.css';
import FriendCart from "./FriendCart/FriendCart";
import List from '@material-ui/core/List';

const ContactList = (props) => {
    // console.log(props)
    let ContactList = props.state.friends.map((friend, index) =>
        <FriendCart key={index} friend={friend} chats={props.state.chats}/>)
    return (
        <List>
            {ContactList}
        </List>

    );
}

export default ContactList;
