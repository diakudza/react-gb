import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, useParams} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {ShowChat} from "./pages/chats/ShowChat";

let App = (props) => {
    let temp=[];
    const [state, setChats] = useState(
        {
            100: {author: "mixa", ava: '1.png', chats: [{id: 1, author: 100, text: "Привет", im: true},]},
            101: {
                author: "toxa", ava: '2.png', chats: [{id: 2, author: 101, text: "Хай , мэн", im: false},
                    {id: 1, author: 100, text: "Хай", im: true},
                    {id: 2, author: 100, text: "Как сам?", im: true},
                    {id: 3, author: 101, text: "Иди ты", im: false},]
            },
            102: {author: "lexa", ava: '3.png', chats: [{id: 6, author: 102, text: "Аллоха!", im: false},]},
            103: {
                author: "Anna", ava: '4.png', chats: [{id: 9, author: 103, text: "Купи моркови!", im: false},
                    {id: 1, author: 100, text: "Ленка зажгла!", im: true},
                    {id: 2, author: 103, text: "Привки!", im: false},]
            },
            104: {
                author: "Janna", ava: '5.png', chats: [{id: 10, author: 104, text: "Видел тачку?!", im: false},
                    {id: 1, author: 100, text: "Аллоха!", im: true},
                    {id: 2, author: 104, text: "Жить хорошо!", im: false}]
            },
            105: {
                author: "Kolia",
                ava: '2.png',
                chats: [{id: 1, author: 105, text: "Надо увидиться , есть тема !!", im: false}]
            },
            106: {author: "Roman", ava: '5.png', chats: [{id: 1, author: 106, text: "Аллоха!", im: false},]},
            107: {author: "Kesha", ava: '3.png', chats: [{id: 2, author: 107, text: "Аллоха!", im: false}]},
            110: {
                author: "Robot",
                ava: '1.png',
                chats: [{id: 1, author: 110, text: "Смерть кожаными мешкам", im: false},]
            }
            ,


        });

    let getAuthorById =(findId)=>{
        let author = Object.entries(state).filter(id => id[0] == findId)
        return author[0][1].author
    }

    let setMessageAdd = (message, id) => {
        temp.push( {id:1111, author: 100, text: message, im: true})
        console.log(state)
        //debugger
        let el = state[id].chats.length+1
        console.log(el)
        state[id].chats.push( {id:el, author: 100, text: message, im: true})
        //console.log(temp)
        sendMessageFromRobot(`Я не пойму ,что ты имеешь в виду?`,id)
        setChats(state)
        //console.log(state)

    }

    const removeItem = (id,n) => {
        debugger
        let findItem = n.currentTarget.attributes[0].value
        let el = state[id].chats

        //chats.chats.splice(1.)
        //setChats(chats)
        //console.log(chats.chats.findIndex(itemChat))

    }

    // useEffect(() => {
    //     // if (messages[messages.length - 1].author !== 'ROBOT') {
    //     //     let lastMessage = messages[messages.length - 1].text
    //     //     sendMessageFromRobot(`Я не пойму "${lastMessage}" ,что ты имеешь в виду?`)
    //     // }
    //     console.log('effect где?')
    //     //sendMessageFromRobot(`Я не пойму ,что ты имеешь в виду?`,100)
    // }, [state]) //[state],[temp],[]

    let sendMessageFromRobot = (message, id, delay = 1000) => {
       if(temp.length!==0){
           //debugger
           setTimeout(() => {
            //console.log(temp)
            state[id].chats.push( {id:1111, author: id, text: message, im: false})
            //console.log(state[id].chats)
            temp = []
            setChats(state)
            props.render()
        }, (Math.random() * 2) * delay)
    }
    }
    return (

        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/Chats" render={() => <ShowChat chats={state} setMessageAdd={setMessageAdd} getAuthorById={getAuthorById} render={props.render}/>}/>
                <Route path="/Chats/:id"
                       render={() => <ShowChat chats={state} removeItem={removeItem} setMessageAdd={setMessageAdd} getAuthorById={getAuthorById} render={props.render}/>}/>
            </div>

        </Router>

    );
};

export default App;
