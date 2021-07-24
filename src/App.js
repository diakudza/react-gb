import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, useParams} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {ShowChat} from "./pages/chats/ShowChat";
import Chats from "./pages/chats/Chats";

let App = () => {

    const [chats, setChats] = useState(
        {
            chats: {
                100: [
                    {id: 1, author: 100, text: "Привет", im: true},
                ],
                101: [
                    {id: 2, author: 101, text: "Хай , мэн", im: false},
                    {id: 2, author: 100, text: "Хай", im: true},
                    {id: 3, author: 100, text: "Как сам?", im: true},
                    {id: 4, author: 101, text: "Иди ты", im: false},
                ],
                102: [
                    {id: 6, author: 102, text: "Аллоха!", im: false},
                ],
                103: [
                    {id: 9, author: 103, text: "Купи моркови!", im: false},
                    {id: 11, author: 100, text: "Ленка зажгла!", im: true},
                    {id: 7, author: 103, text: "Привки!", im: false},
                ],
                104: [
                    {id: 10, author: 104, text: "Видел тачку?!", im: false},
                    {id: 12, author: 100, text: "Аллоха!", im: true},
                    {id: 8, author: 104, text: "Жить хорошо!", im: false}
                ],
                105: [{id: 13, author: 105, text: "Надо увидиться , есть тема !!", im: false}],
                106: [{id: 14, author: 106, text: "Аллоха!", im: false},],
                107: [{id: 15, author: 107, text: "Аллоха!", im: false},],
                108: [],
                109: [],
                110: [{id: 5, author: 110, text: "Смерть кожаными мешкам", im: true},]
            },

            friends: [
                {id: 110, author: "Robot", ava: ''},
                {id: 100, author: "mixa", ava: '1.png'},
                {id: 101, author: "toxa", ava: '2.png'},
                {id: 102, author: "lexa", ava: '3.png'},
                {id: 103, author: "Anna", ava: '4.png'},
                {id: 104, author: "Janna", ava: '5.png'},
                {id: 105, author: "Kolia", ava: '2.png'},
                {id: 106, author: "Roman", ava: '5.png'},
                {id: 107, author: "Kesha", ava: '3.png'},
            ],
            currentChat: [{author: "ROBOT", text: "Привет, Миха", ai: true}]
        });

    let setMessageAdd = (message) => {
        //debugger
        setChats([...chats.currentChat, {author: "mixa", text: message, ai: false}])
    }

    const removeItem = (n) => {
        // debugger
        let findItem = n.currentTarget.attributes[0].value
        let itemChat = chats.chats.find((el, index) => el.id == findItem) //нахожу обьект, но не могу получить его индеккс, что бы потмо его удалить

        //chats.chats.splice(1.)
        //setChats(chats)
        //console.log(chats.chats.findIndex(itemChat))

    }


    return (

        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/Chats" render={() => <Chats chats={chats}/>}/>
                <Route path="/Chats/:id"
                       render={() => <ShowChat chats={chats} removeItem={removeItem} setMessageAdd={setMessageAdd}/>}/>
            </div>

        </Router>

    );
};

export default App;
