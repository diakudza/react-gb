import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, useParams} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Chats from "./pages/chats/Chats";
import Message from "./pages/chats/MessageList/Message/Message";

let App = () => {

    const [chats, setChats] = useState(
        {
            chats: [
                {id:1, author: 100, text: "Привет", ai: false},
                {id:2, author: 101, text: "Хай , мэн", ai: false},
                {id:3, author: 101, text: "Как сам?", ai: false},
                {id:4,author: 101, text: "Иди ты", ai: false},
                {id:5,author: 110, text: "Смерть кожаными мешкам", ai: true},
                {id:6,author: 102, text: "Аллоха!", ai: false},
                {id:7,author: 103, text: "Привки!", ai: false},
                {id:8,author: 104, text: "Жить хорошо!", ai: false},
                {id:9,author: 103, text: "Купи моркови!", ai: false},
                {id:10,author: 104, text: "Видел тачку?!", ai: false},
                {id:11,author: 103, text: "Ленка зажгла!", ai: false},
                {id:12,author: 104, text: "Аллоха!", ai: false},
                {id:13,author: 105, text: "Надо увидиться , есть тема !!", ai: false},
                {id:14,author: 106, text: "Аллоха!", ai: false},
                {id:15,author: 107, text: "Аллоха!", ai: false},
            ]
            ,
            friends: [
                {id: 110, author: "Robot", ava: ''},
                {id: 100, author: "mixa", ava: '1.png'},
                {id: 101, author: "toxa", ava: '2.png'},
                {id: 102, author: "lexa", ava: '3.png'},
                {id: 103, author: "Anna", ava: '4.png'},
                {id: 104, author: "Janna", ava: '5.png'},
                {id: 105, author: "Kolia", ava: '2.png'},
                {id: 106, author: "Roman", ava: '5.png'},
            ],
            currentChat: [{author: "ROBOT", text: "Привет, Миха", ai: true}]
        });

    const removeItem = (n) => {
        let findItem = n.currentTarget.attributes[0].value
        let itemChat = chats.chats.find((el,index) => el.id==findItem) //нахожу обьект, но не могу получить его индеккс, что бы потмо его удалить

        //chats.chats.splice(1.)
        //setChats(chats)
        //console.log(chats.chats.findIndex(itemChat))

    }
    const ShowChat = () => {
        const {id} = useParams();
        let AllMessage = chats.chats.filter(mes => mes.author ==  id)
        let ArratAllMessage = AllMessage.map((mes) => <Message messages={mes} removeItem={removeItem}/> )
        let author = chats.friends.find(mes => mes.id ==  id)
        return (
            <div className="padding020">
               <h2>Chat: {author.author}</h2>
                {ArratAllMessage}
            </div>
        )
    };

    return (

        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/Chats" render={() => <Chats chats={chats}/>}/>
                <Route path="/Chats/:id" component={ShowChat}/>
            </div>

        </Router>

    );
};

export default App;
