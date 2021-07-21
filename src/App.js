import './App.css';
import React, {useEffect, useState} from "react";
import ContactList from "./components/ContactList/ContactList";
import MessageList from "./components/MessageList/MessageList";
import {state} from "./state";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



let App = (props) => {

    console.log(props)
    const [messages, setMessages] = useState([{author: "ROBOT", text: "Привет, Миха", ai: true}]);
    useEffect(() => {
        debugger
        if (messages[messages.length - 1].author !== 'ROBOT' ) {
            let lastMessage = messages[messages.length - 1].text
            setTimeout(() => {
                setMessages([...messages, {author: "ROBOT", text: ` Я не пойму "${lastMessage}" , что ты имеешь в виду?`, ai: true}])
            }, (Math.random() * 2) * 1000)
        }
    }, [props.state.messages])

    const setMessage = (message) => {
        debugger
        if (message != '' && message != 'Some text '){
            setMessages([...messages, { author: 'mixa', text: message, ai: false }]);
            setMessages([...messages, { author: 'ROBOT', text: `Человек детектед!`, ai: true }])
        } else {
            setMessages([...messages, { author: 'ROBOT', text: `Человек не отправляй пустоту!`, ai: true }])
        }

    }

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
                        <MessageList props={messages} setMessage={setMessage}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
