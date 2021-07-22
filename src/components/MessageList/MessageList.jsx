import Message from "./Message/Message";
import Form from "./Form/Form";
import React from "react";

const MessageList = (props) => {
    console.log(props)
    let messagesArr = props.messages.map((el, index) => <Message key={index} messages={el}/>)

    return (
        <>
            <div className="flecCol">
                {messagesArr}
            </div>
            <Form setMessage={props.setMessage}/>
        </>
    );
}

export default MessageList;
