import React from "react";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';



const FriendCart = (props) => {
    // console.log(props)
    let lastMessage = props.props.filter(mes => mes.author == props.friend.id)
    lastMessage = lastMessage[lastMessage.length-1]
    return (
        <>
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
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    );

}

export default FriendCart;