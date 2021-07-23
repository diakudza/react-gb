import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, useParams} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Chats from "./pages/chats/Chats";

let App = () => {

    // const [messages, setMessages] = useState([{author: "ROBOT", text: "Привет, Миха", ai: true}]);
    const [chats, setChats] = useState(
        {
            chats: [
                {author: 100, text: "Привет", ai: false},
                {author: 101, text: "Хай , мэн", ai: false},
                {author: 101, text: "Как сам?", ai: false},
                {author: 101, text: "Иди ты", ai: false},
                {author: 110, text: "Смерть кожаными мешкам", ai: true},
                {author: 102, text: "Аллоха!", ai: false},
                {author: 103, text: "Привки!", ai: false},
                {author: 104, text: "Аллоха!", ai: false},
                {author: 105, text: "Надо увидиться , есть тема !!", ai: false},
                {author: 106, text: "Аллоха!", ai: false},
                {author: 107, text: "Аллоха!", ai: false},
            ]
            ,
            friends: [
                {id: 110, author: "Robot", ava: ''},
                {id: 100, author: "mixa", ava: '1.png'},
                {id: 101, author: "toxa", ava: '2.png'},
                {id: 102, author: "lexa", ava: '5.png'},
                {id: 103, author: "Anna", ava: '2.png'},
                {id: 104, author: "Janna", ava: '5.png'},
                {id: 105, author: "Kolia", ava: '2.png'},
                {id: 106, author: "Roman", ava: '5.png'},
            ],
            currentChat: [{author: "ROBOT", text: "Привет, Миха", ai: true}]
        });

    return (

        <Router>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Chats" render={() => <Chats chats={chats}/>}>
                <switch>
                    <Route path="/Chat/:id"
                           render={(id)=>{
                               console.log(id)
                               const {}=useParams();
                           }}
                </switch>
            </Route>
        </Router>

    );
};

export default App;
