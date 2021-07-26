import {useParams} from "react-router-dom";
import Message from "./MessageList/Message/Message";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ContactList from "./ContactList/ContactList";
import "../../App.css"
import Form from "./MessageList/Form/Form";

export const ShowChat = (props) => {
    console.log(props)
    let {id} = useParams();
    if(id===undefined){ id = 110}

    let MessList = props.state.map((mes,index) => <Message key={index} messages={mes.text} author={mes.author} id={mes.id} im={mes.im} removeItem={props.removeItem}/> )

    return (
        <div className="padding20">
            <Grid container spacing={2}>
                <Grid item xs={2}>{/*Список контактов*/}
                    <Paper elevation={3}>
                        <ContactList state={props.friend} startChat={props.startChat} id={id}/>
                    </Paper>
                </Grid>
                <Grid item xs={10} className="flexCol" >
                    <div className="flexCol messageHeight" >
                        <h2>Chat: {props.friend[id].author}</h2>
                        {props.state[1] && MessList}
                    </div>
                    <Form setMessageAdd={props.setMessageAdd} id={id} author={props.friend[id].author}/>
                </Grid>
            </Grid>

        </div>
    )
};