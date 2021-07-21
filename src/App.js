import './App.css';
import Message from "./components/Message/Message";
import {useState, useEffect} from "react";
import Form from "./components/Form/Form";
import React from "react";

let App = () => {

    const [messages, setMessages] = useState([{author: "ROBOT", text: "Привет, Миха", ai: true}]);

    let messagesArr = messages.map((el, index) => <Message key={index} state={el}/>)

    let setMessage = (message) => {
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
            if (lastMessage == '') {
                messages.pop()
                setMessages(messages)
                sendMessageFromRobot(`А зачем пустоту слать?`,0)
            } else {
                sendMessageFromRobot(`Я не пойму "${lastMessage}" ,что ты имеешь в виду?`)
                }
        }
    }, [messages])


    return (

        <div className="App">
            {messagesArr}
            <Form setmessage={setMessage}/>
        </div>
    );
}

export default App;
