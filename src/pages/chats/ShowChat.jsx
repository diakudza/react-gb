import {Route, useParams} from "react-router-dom";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "../../App.css"

import {ChatFeed} from "./ChatFeed";
import ContactList from "./ContactList/ContactList";

export const ShowChat = (props) => {
    console.log(props)
    return (
        <div className="padding20" style={{height: 'auto'}} >
            <Grid container spacing={2}>
                <Grid item xs={2}>{/*Список контактов*/}
                    <Paper elevation={3}>
                        <ContactList state={props.friend}
                                     startChat={props.startChat}/>
                    </Paper>
                </Grid>
                <Grid item xs={10} style={{height: 'auto'}}>
                    <Route path="/Chat/:id"
                           render={() => <ChatFeed state={props.state}
                                                   friend={props.friend}
                                                   style={{height: 'auto'}}
                                                   startChat={props.startChat}
                                                   removeItem={props.removeChatItem}
                                                   setMessageAdd={props.setMessageAdd}/>}
                    />

                </Grid>
            </Grid>

        </div>
    )
};