import React from "react";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from "react-router-dom";

const FriendCart = (props) => {

    return (
        <>
            <NavLink to={"/Chat/" + props.id}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={props.author} src={"../../userpic/" + props.ava}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.author}
                        secondary={
                            <React.Fragment>
                                {/*{lastMessage}*/}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </NavLink>
            <Divider variant="inset" component="li"/>
        </>
    );
}

export default FriendCart;