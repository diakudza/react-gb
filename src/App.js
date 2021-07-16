import './App.css';
import Message from "./components/Message/Message";
import {useState, useEffect} from "react";
import Form from "./components/Form/Form";
import React from "react";

let App = () => {

  const [messages, setMessages] = useState([
      {author : "mixa", text : "Привет"},
      {author : "toxa", text : "Хай , мэн"},
      {author : "lexa", text : "Аллоха!"},
        ]);

    let messagesArr = messages.map(el => <Message state={el} />)
    console.log(typeof messages)
    let setMessage = (message) => {
        setMessages (messages.push({author: 'mixa', text: message}));
        debugger
        console.log(messages) //проверил, пушит в стейт!
    }

    // useEffect(() => {
    //     console.log(`11111`);
    //
    // }, [messages]);


    return (

    <div className="App">

        {messagesArr} {/*на повторном вызове ,, после добавления ругается "TypeError: messages.map is not a function*/}

        <Form setmessage={setMessage} />
    </div>

  );
}

export default App;
