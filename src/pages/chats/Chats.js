import '../../App.css';
import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ContactList from "./ContactList/ContactList";
import MessageList from "./MessageList/MessageList";

let Chats = (props) => {
    const [messages, setMessages] = useState([{author: "ROBOT", text: "Привет, Миха", ai: true}]);
    let setMessage = (message) => {
        setMessages([...messages, {author: "mixa", text: message, ai: false}])
    }
    let sendMessageFromRobot = (message, delay = 1000) => {
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
        <div className="padding020">
            <h2>Сообщения</h2>
            <Grid container spacing={2}>
                <Grid item xs={2}>{/*Список контактов*/}
                    <Paper elevation={3}>
                        {/*<ContactList state={props.chats}/>*/}
                    </Paper>
                </Grid>
                <Grid item xs={10} className="flexCol">
                    {/*<MessageList messages={messages} setMessage={setMessage} className="flexCol messageList"/>*/}
                </Grid>
            </Grid>
        </div>

    );
}

export default Chats;
