import {useParams} from "react-router-dom";
import Message from "./MessageList/Message/Message";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ContactList from "./ContactList/ContactList";
import "../../App.css"
import Form from "./MessageList/Form/Form";
export const ShowChat = (props) => {
    let {id} = useParams();
    if(id===undefined){ id = 110}
    let ArrayAllMessage = props.chats[id].chats.map((mes,index) => <Message key={index} messages={mes} id={id} getAuthorById={props.getAuthorById} removeItem={props.removeItem}/> )

    console.log(props)
    return (

        <div className="padding20">

            <Grid container spacing={2}>
                <Grid item xs={2}>{/*Список контактов*/}
                    <Paper elevation={3}>
                        <ContactList state={props.chats} id={id}/>
                    </Paper>
                </Grid>
                <Grid item xs={10} className="flexCol" >


                    <div className="flexCol messageHeight" >
                        <h2>Chat: {props.chats[id].author}</h2>

                    {ArrayAllMessage}
                    </div>
                    <Form setMessageAdd={props.setMessageAdd} render={props.render}id={id}/>
                </Grid>
            </Grid>

        </div>
    )
};