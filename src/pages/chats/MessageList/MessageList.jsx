import Message from "./Message/Message";
import Form from "./Form/Form";
import React from "react";
import s from "./MessageList.module.css"

const MessageList = (props) => {

    return (
        <>
            <div className={"flecCol" + " " + s.messageList}>
                {/*{messagesArr.reverse()}*/}
            </div>
            <Form id={props.id} setMessageAdd={props.setMessageAdd}/>
        </>
    );
}

export default MessageList;
