import React from "react";
import '../../../App.css';
import FriendCart from "./FriendCart/FriendCart";
import List from '@material-ui/core/List';

const ContactList = (props) => {
    // console.log(props.state)
    let ContactList = Object.entries(props.state).map((id,index) =><FriendCart key={index} author={id[1].author} startChat={props.startChat} id={id[0]} ava={id[1].ava} messsage={id[1].message}/>)
      return (
        <List>
            {ContactList}
        </List>

    );
}

export default ContactList;
