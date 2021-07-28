import './App.css';
import React, {useEffect, useState} from "react";
import {Provider, useSelector} from "react-redux"
import {BrowserRouter as Router, Route, useParams} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {ShowChat} from "./pages/chats/ShowChat";
import {v4 as uuidv4} from 'uuid';
import {store} from "./store"


let App = () => {

    const friend = {
        100: {author: "mixa", ava: '1.png'},
        101: {author: "toxa", ava: '2.png'},
        102: {author: "lexa", ava: '3.png'},
        103: {author: "Anna", ava: '4.png'},
        104: {author: "Janna", ava: '5.png'},
        105: {author: "Kolia", ava: '2.png'},
        106: {author: "Roman", ava: '5.png'},
        107: {author: "Kesha", ava: '3.png'},
        110: {author: "Robot", ava: '1.png'},
    };

    const [chats, setChats] = useState([]);

    let setMessageAdd = (message,fromId, fromAuthor) => {
           setChats([...chats, {id: uuidv4(), author: "mixa", text: message, im: false, fromAuthor: fromAuthor}])
    }

    const removeItem = (id) => {
        //debugger
        let findItem = id.currentTarget.attributes[0].value
        let filterredArray = chats.filter(el => el.id !== findItem)
        console.log(filterredArray)
        setChats(filterredArray)
    }

    const startChat = () => setChats([])

    useEffect(() => {
                sendMessageFromRobot(`Я не пойму ,что ты имеешь в виду?`, 100,)}, [chats])

    let sendMessageFromRobot = (message, delay = 1000) => {
        if (chats.length !== 0 && chats[chats.length - 1].author == 'mixa' ) {
            setTimeout(() => {
               setChats([...chats, {id: uuidv4(), author: chats[chats.length -1].fromAuthor, text: message, im: true}])
            }, (Math.random() * 2) * delay)
        }
    }
    return (
<Provider store={store}>
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/Chats"
                       render={() => <ShowChat friend={friend} state={chats} startChat={startChat} setMessageAdd={setMessageAdd}
                       />}/>
                <Route path="/Chats/:id"
                       render={() => <ShowChat friend={friend} state={chats} startChat={startChat} removeItem={removeItem}
                                               setMessageAdd={setMessageAdd}
                       />}/>
            </div>

        </Router>
</Provider>
    );
};

export default App;
