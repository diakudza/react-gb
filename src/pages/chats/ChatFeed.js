import {useParams} from "react-router-dom";
import Message from "./MessageList/Message/Message";
import React from "react";
import "../../App.css"
import Form from "./MessageList/Form/Form";
import {v4 as uuidv4} from "uuid";

export const ChatFeed = () => {

    // let setMessageAdd = (message,fromId, fromAuthor) => {
    //     setChats([...chats, {id: uuidv4(), author: "mixa", text: message, im: false, fromAuthor: fromAuthor}])
    // }
    //
    // const removeChatMessage = (id) => {
    //     let filterredArray = chats.filter(el => el.id !== id)
    //     setChats(filterredArray)
    // }
    //
    // const startChat = () => setChats([])
    //
    // useEffect(() => {
    //     sendMessageFromRobot(`Я не пойму ,что ты имеешь в виду?`, 100,)}, [chats])
    //
    // let sendMessageFromRobot = (message, delay = 1000) => {
    //     if (chats.length !== 0 && chats[chats.length - 1].author == 'mixa' ) {
    //         setTimeout(() => {
    //             setChats([...chats, {id: uuidv4(), author: chats[chats.length -1].fromAuthor, text: message, im: true}])
    //         }, (Math.random() * 2) * delay)
    //     }
    // }
    debugger
    console.log('111')
    // let {id} = useParams();
    // if (id === undefined) {
    //     id = 110
    // }
    // let MessList = props.state.map((mes, index) => <Message key={index}
    //                                                         messages={mes.text}
    //                                                         author={mes.author}
    //                                                         id={mes.id}
    //                                                         im={mes.im}
    //                                                         removeChatMessage={props.removeChatMessage}/>).reverse()

    return (
        <div className="messageList">
            asdsadad
            <div className="flexCol messageHeight">
                {/*<h2>Chat: {props.friend[id].author}</h2>*/}
                   {/*{props.state[1] && MessList}*/}
            </div>
            {/*<Form setMessageAdd={props.setMessageAdd}*/}
            {/*      id={id}*/}
            {/*      author={props.friend[id].author}/>*/}
        </div>
    )
};