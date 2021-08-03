import {useParams} from "react-router-dom";
import Message from "./MessageList/Message/Message";
import React from "react";
import "../../App.css"
import Form from "./MessageList/Form/Form";
import {v4 as uuidv4} from "uuid";
import {messagesConnect} from "../../connects/messagesConnect";

const ChatFeedRender = ({sendMessage, removeMessage, getDialog, getMessage, getDialogById}) => {

    let {id} = useParams();
    if (id === undefined) {
        id = 110
    }

    let setMessageAdd = (message) => {
        sendMessage({chatID:id, messageId: uuidv4(), author: 100, text: message})
    }

    let removeChatMessage = (chatId,messageId) => {
         removeMessage(chatId,messageId)
    }

    let messegeForCurrentContact = (id) => {
        //debugger
        let arrayOfmessageForUser = Object.entries(getMessage).filter((contact) => contact[0] == id)
        return arrayOfmessageForUser[0][1]
    }

    const findContactById = (id) => {
        if (id === undefined) {
            id = 110
        }
        if (id === 100) {
            return 'Я'
        }

        let arrayOfmessageForUser = Object.entries(getDialog).filter((contact) => contact[0] == id)

        return arrayOfmessageForUser[0][1].author
    }



    // let sendMessageFromRobot = (message, delay = 1000) => {
    //     if (chats.length !== 0 && chats[chats.length - 1].author == 'mixa' ) {
    //         setTimeout(() => {
    //             setChats([...chats, {id: uuidv4(), author: chats[chats.length -1].fromAuthor, text: message, im: true}])
    //         }, (Math.random() * 2) * delay)
    //     }
    // }

    let MessList = messegeForCurrentContact(id).map((mes, index) => <Message key={index}
                                                                             messages={mes.text}
                                                                             author={mes.author}
                                                                             id={mes.messageId}
                                                                             chatid={id}
                                                                             findContactById={findContactById}
                                                                             removeChatMessage={removeChatMessage}/>).reverse()

    return (
        <div className="messageList">
            <div className="flexCol messageHeight">
                <h2>Chat: {getDialog[id].author}</h2>
                {MessList}
            </div>
            <Form setMessageAdd={setMessageAdd}
                  id={id}
                  author={getDialog[id].author}/>
            </div>
    )
};

export const ChatFeed = messagesConnect(ChatFeedRender)