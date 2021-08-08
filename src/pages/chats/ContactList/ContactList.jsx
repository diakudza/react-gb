import React from "react";
import '../../../App.css';
import FriendCart from "./FriendCart/FriendCart";
import List from '@material-ui/core/List';
import {contactsConnect} from "../../../connects/contactsConnect"

const ContactListRender = ({contactList,getLastMessageByContactId}) => {

    let last = getLastMessageByContactId(105);
    console.log(last);
    let ContactList = Object.entries(contactList).map((id,index) =><FriendCart key={index}  author={id[1].author}  id={id[0]} ava={id[1].ava} />)
      return (
        <List>
            {ContactList}
        </List>

    );
}

export const ContactList = contactsConnect(ContactListRender);
