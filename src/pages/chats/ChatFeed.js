import {useParams} from "react-router-dom";
import Message from "./MessageList/Message/Message";
import React from "react";
import "../../App.css"
import Form from "./MessageList/Form/Form";

export const ChatFeed = (props) => {
    console.log(props)
    let {id} = useParams();
    if (id === undefined) {
        id = 110
    }
    let MessList = props.state.map((mes, index) => <Message key={index}
                                                            messages={mes.text}
                                                            author={mes.author}
                                                            id={mes.id}
                                                            im={mes.im}
                                                            removeItem={props.removeItem}/>).reverse()

    return (
        <div className="padding20 messageList">
            <div className="flexCol messageHeight">
                <h2>Chat: {props.friend[id].author}</h2>
                   {props.state[1] && MessList}
            </div>
            <Form setMessageAdd={props.setMessageAdd}
                  id={id}
                  author={props.friend[id].author}/>


        </div>
    )
};