import './App.css';
import React from "react";
import ContactList from "./components/ContactList/ContactList";
import MessageList from "./components/MessageList/MessageList";
import {state} from "./state";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

let App = (props) => {

    // debugger
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
                    <Paper elevation={3}>
                        <MessageList state={props.state} setMessage={props.setMessage.bind(state)}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    );
}

export default App;
