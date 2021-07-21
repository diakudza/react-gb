import Message from "./Message/Message";
import Form from "./Form/Form";
import React from "react";
import s from "../../App.css"


const MessageList = (props) => {
    console.log(props)
    let messagesArr = props.state.messages.map((el, index) => <Message key={index} state={el}/>)


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
