import {
    SEND_MESSAGE,
    GET_ALL_MESSAGES,
    REMOVE_MESSAGES,
    GET_DIALOG_BY_ID,
    LAST_MESSAGE,
    ADD_CHATS_FROM_DB
} from "./action";

const messagesInitialState = {}

export const messagesReducer = (state = messagesInitialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            debugger
            let index = action.payload.chatID
            return {
                ...state,
                [index]: [
                    ...state[index], {
                        messageId: action.payload.messageId,
                        author: action.payload.author,
                        text: action.payload.text
                    }
                ]
            }


        case
        REMOVE_MESSAGES:
            debugger
            // let dialogWhitCurrentContact = Object.entries(state).filter(chat => chat[0] == action.payload)
            // let messageForRemove = dialogWhitCurrentContact[0][1].filter(message => message.messageId !== action.messageId)
            return {
                ...state

            }

        case
        GET_ALL_MESSAGES:
            debugger
        // let findContact = state.filter((user) => user.id == action.payload)
        // return {...state, findContact}

        case
        GET_DIALOG_BY_ID:
            debugger
            let findContact = state.filter((user) => user.id == action.payload)
            return {...state, findContact}
        case
        LAST_MESSAGE:
            debugger
            let lastMessage = state.filter((user) => user.id == action.payload)
            return {...state}

        case
        ADD_CHATS_FROM_DB:
            debugger
            console.log(action.payload)
            state = action.payload
            return {
                ...state
            }

        default:
            return state
    }
}