import React from "react";
//import ava1 from '../../assets/userpic/'
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const FriendCart = (props) => {

        return (


               <>
                
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.friend.author} src={"../../assets/userpic/"+props.friend.ava} />
        </ListItemAvatar>
        <ListItemText
          primary={props.friend.author}
          secondary={
            <React.Fragment>
              {props.friend.author}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
        </>

    );

}

export default FriendCart;