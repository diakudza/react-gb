import React from "react";
// import s from "./FriendCard.css"
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from "react-router-dom";


const FriendCart = (props) => {
    // console.log(props)
    let lastMessage = props.chats.filter(mes => mes.author == props.friend.id)
    let countOfMessage = lastMessage.length
    lastMessage = lastMessage[lastMessage.length - 1]
    if (lastMessage.text.length > 15) {
        lastMessage.text = lastMessage.text.substr(0, 15) + "...."
    }

    console.log(lastMessage)
    return (
        <>
           <NavLink to={"Chats/"+props.friend.id}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={props.friend.author} src={"../../userpic/" + props.friend.ava}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.friend.author}
                        secondary={
                            <React.Fragment>
                                {lastMessage.text}
                            </React.Fragment>
                        }
                    />{countOfMessage}
                </ListItem>
            </NavLink>
            <Divider variant="inset" component="li"/>
        </>
    );

}

export default FriendCart;