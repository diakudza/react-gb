import React from "react";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from "react-router-dom";


const FriendCart = (props) => {
    // console.log(props)
    let countOfMessage = props.chats.length
    let lastMessage = props.chats[countOfMessage - 1]
    if (lastMessage.text.length > 15) {
         lastMessage.text = lastMessage.text.substr(0, 15) + "...."
    }

    return (
        <>
           <NavLink to={"/Chats/"+props.id}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={props.author} src={"../../userpic/" + props.ava}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.author}
                        secondary={
                            <React.Fragment>
                                {lastMessage.text}
                            </React.Fragment>
                        }
                    />
                    {countOfMessage}
                </ListItem>
            </NavLink>
            <Divider variant="inset" component="li"/>
        </>
    );

}

export default FriendCart;