import {Route} from "react-router-dom";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "../../App.css"
import {ChatFeed} from "./ChatFeed";
import {ContactList} from "./ContactList/ContactList";

export const ShowChat = () => {

    return (
        <div className="padding20" style={{height: 'auto'}}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Paper elevation={3}>
                        <ContactList/>
                    </Paper>
                </Grid>
                <Grid item xs={10} style={{height: 'auto'}}>

                   <Route path="/Chat/:id" render={() => <ChatFeed /> }/>


                </Grid>
            </Grid>

        </div>
    )
};