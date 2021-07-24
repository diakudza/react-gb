import './App.css';
import React, {useEffect, useState} from "react";
import ContactList from "./components/ContactList/ContactList";
import MessageList from "./components/MessageList/MessageList";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

let App = (props) => {

    const [messages, setMessages] = useState([{author: "ROBOT", text: "Привет, Миха", ai: true}]);

    let setMessage = (message) => {
        debugger
        setMessages([...messages, {author: "mixa", text: message, ai: false}])
    }

    let sendMessageFromRobot = (message, delay=1000) => {
        setTimeout(() => {
            setMessages([...messages, {author: "ROBOT", text: message, ai: true}])
        }, (Math.random() * 2) * 1000)
    }

    useEffect(() => {
        if (messages[messages.length - 1].author !== 'ROBOT') {
            let lastMessage = messages[messages.length - 1].text
            sendMessageFromRobot(`Я не пойму "${lastMessage}" ,что ты имеешь в виду?`)
        }
    }, [messages])

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
                        <MessageList messages={messages} setMessage={setMessage}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
