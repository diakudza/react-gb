import './App.css';
import Message from "./components/Message/Message";
import {useState, useEffect} from "react";
import Form from "./components/Form/Form";
import React from "react";

let App = () => {

    const [messages, setMessages] = useState([{author: "ROBOT", text: "Привет, Миха", ai: true}]);

    let messagesArr = messages.map((el,index) => <Message key={index} state={el}/>)

    let setMessage = (message) => {
        if (message !== "") {
            setMessages([...messages, {author: "mixa", text: message, ai: false}])
        } else {
            setTimeout(() => {
                setMessages([...messages, {author: "ROBOT", text: `Зачем отправляешь пустоту?`, ai: true}])
            }, (Math.random() * 2) * 1000)
        }
    }

    useEffect(() => {
        if (messages[messages.length - 1].author !== 'ROBOT' ) {
            let lastMessage = messages[messages.length - 1].text
            setTimeout(() => {
                setMessages([...messages, {author: "ROBOT", text: ` Я не пойму "${lastMessage}" , что ты имеешь в виду?`, ai: true}])
            }, (Math.random() * 2) * 1000)
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
