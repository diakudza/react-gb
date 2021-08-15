import {messageRef} from "../../api/requests/message";

export const SEND_MESSAGE = "MESSAGE::SEND_MESSAGE";
export const GET_ALL_MESSAGES = "MESSAGE::GET_ALL_MESSAGES"
export const REMOVE_MESSAGES = "MESSAGE::REMOVE_MESSAGES"
export const GET_DIALOG_BY_ID = "MESSAGE::GET_DIALOG_BY_ID"
export const LAST_MESSAGE = "MESSAGE::LAST_MESSAGE"

export const ADD_CHATS_FROM_DB = "MESSAGE::ADD_CHATS_FROM_DB"


export const sendMessage = (userId) => ({type: SEND_MESSAGE, payload: userId})
//export const removeMessageFromDB = (chatId,messageId) => ({type:REMOVE_MESSAGES, payload:chatId,messageId})
export const lastMessage = (userId) => ({type: LAST_MESSAGE, payload: userId})
export const getDialogById = (userId) => ({type: GET_DIALOG_BY_ID, payload: userId})
export const addChatsFromDB = (chatId) => ({type: ADD_CHATS_FROM_DB, payload: chatId})

export const initMessageTracking = () => (dispatch) => {

    messageRef.on("value", (snapshot) => {
        //console.log(snapshot.val())
        dispatch(addChatsFromDB(snapshot.val()))
    })
}

export const removeMessageFrom = (chatId,messageId) => (dispatch) => {


}