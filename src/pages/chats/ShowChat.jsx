import {useParams} from "react-router-dom";
import Message from "./MessageList/Message/Message";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ContactList from "./ContactList/ContactList";
import MessageList from "./MessageList/MessageList";

export const ShowChat = (props) => {
    let {id} = useParams();
    if(id===undefined){ id = 110}
    console.log(props)
    //let AllMessage = props.chats.chats[id].map(mes => mes.text ==  id)
    //console.log(AllMessage)
    let ArrayAllMessage = props.chats.chats[id].map((mes) => <Message messages={mes} removeItem={props.removeItem}/> )
    let author = props.chats.friends.find(mes => mes.id ==  id)

    return (

        <div className="padding020">

            <Grid container spacing={2}>
                <Grid item xs={2}>{/*Список контактов*/}
                    <Paper elevation={3}>
                        <ContactList state={props.chats}/>
                    </Paper>
                </Grid>
                <Grid item xs={10} className="flexCol">
                    <h2>Chat: {author.author}</h2>
                   {/*<MessageList messages={props.chats} setMessageAdd={props.setMessageAdd} className="flexCol messageList"/>*/}
                    {ArrayAllMessage}
                </Grid>
            </Grid>

        </div>
    )
};