import {useParams} from "react-router-dom";
import Message from "./MessageList/Message/Message";
import React from "react";
import "../../App.css"
import Form from "./MessageList/Form/Form";
import {v4 as uuidv4} from "uuid";
import {messagesConnect} from "../../connects/messagesConnect";

const ChatFeedRender = ({sendMessage, removeMessage, dialogState, messageState, getDialogById}) => {

    let {id} = useParams();
    if (id === undefined) {
        id = 110
    }

    let setMessageAdd = (message) => {
        sendMessage({chatID: id, messageId: uuidv4(), author: 100, text: message})
    }

    let removeChatMessage = (chatId, messageId) => {
        removeMessage(chatId, messageId)
    }

    let messegeForCurrentContact = (id) => {

        let arrayOfmessageForUser = Object.entries(messageState).filter((contact) => contact[0] == id)
        console.log(arrayOfmessageForUser[0][1])
        return arrayOfmessageForUser[0][1]
    }

    const findContactById = (id) => {
        //debugger
        if (id === undefined) {
            id = 110
        }
        if (id === 100) {
            return 'Я'
        }

        let arrayOfmessageForUser = Object.entries(dialogState).filter((contact) => contact[0] == id)

        return arrayOfmessageForUser[0][1][0].author
    }


    let MessList = Object.entries(messegeForCurrentContact(id)).map((mes, index) => <Message key={index}
                                                                                             messages={mes[1].text}
                                                                                             author={mes[1].author}
                                                                                             id={mes[0]}
                                                                                             chatid={id}
                                                                                             findContactById={findContactById}
                                                                                             removeChatMessage={removeChatMessage}/>).reverse()

    return (
        <div className="messageList">
            <div className="flexCol messageHeight">
                <h2>Chat: {dialogState[id][0].author}</h2>
                {MessList}
            </div>
            <Form setMessageAdd={setMessageAdd}
                  id={id}
                  author={dialogState[id][0].author}/>
        </div>
    )
};

export const ChatFeed = messagesConnect(ChatFeedRender)