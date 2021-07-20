import './App.css';
import Message from "./components/Message/Message";
import {useState, useEffect} from "react";
import Form from "./components/Form/Form";
import React from "react";


let App = () => {

  const [messages, setMessages] = useState([
      {author : "mixa", text : "Привет", ai: false},
      {author : "toxa", text : "Хай , мэн", ai: false},
      {author : "ROBOT", text : "Смерть кожаными мешкам", ai: true},
      {author : "lexa", text : "Аллоха!", ai: false},
        ]);

    let messagesArr = messages.map(el => <Message state={el} />)

    let setMessage = (message, login) => {
        let arr = [];
        arr.push({author: login, text: message, ai:false});
        setMessages (messages.concat(arr));
        if (login == "mixa"){
            arr.push({author: 'ROBOT', text: "Человек Миха детектед!", ai:true});
            setTimeout(() => { setMessages (messages.concat(arr)) }, 2000 );
        }
    }
    // useEffect( ()=> {
    // if (login == "mixa"){ setTimeout(()=>{
    //     setMessages(messages.concat({author: 'ROBOT', text: "Человек Миха детектед!", ai:true}));
    // }, (Math.random()*2)*1000)
    //
    // }}, messages.author)


    return (

    <div className="App">
        {messagesArr}

        <Form setmessage={setMessage} />
    </div>

  );
}

export default App;
