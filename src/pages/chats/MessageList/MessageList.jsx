import Message from "./Message/Message";
import Form from "./Form/Form";
import React from "react";
import s from "./MessageList.module.css"
const MessageList = (props) => {
    console.log(props)
    //let messagesArr = props.messages.chats.map((el, index) => <Message key={index} messages={el}/>)

    return (
        <>
            <div className={"flecCol"+" "+ s.messageList}>
                {/*{messagesArr.reverse()}*/}
            </div>
            <Form setMessageAdd={props.setMessageAdd}/>
        </>
    );
}

export default MessageList;
