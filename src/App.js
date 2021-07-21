import './App.css';
import React from "react";
import ContactList from "./components/ContactList/ContactList";
import MessageList from "./components/MessageList/MessageList";
import {state} from "./state";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


let App = (props) => {
    console.log(props)
    return (
        <div className="App">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Paper elevation={3}>
                        <ContactList state={props.state}/>
                    </Paper>
                </Grid>
                <Grid item xs={10}>
                    <div className="flexCol messageList" >
                        <MessageList state={props.state} setMessage={props.setMessage.bind(state)}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
