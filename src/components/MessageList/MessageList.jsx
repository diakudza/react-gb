import Message from "./Message/Message";
import Form from "./Form/Form";
import React from "react";



const MessageList = (props) => {
    console.log(props)
 //debugger
     let messagesArr = props.state.messages.map(el => <Message state={el} />)


    return (
        <>
            {messagesArr}
            <Form setMessage={props.setMessage} />
        </>
    );

}

export default MessageList;
