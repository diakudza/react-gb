import {SEND_MESSAGE, GET_ALL_MESSAGES, REMOVE_MESSAGES, GET_DIALOG_BY_ID, LAST_MESSAGE} from "./action";

const messagesInitialState = {

    101: [{messageId: 112, author: 101, text: 'Хелло'}, {messageId: 113, author: 100, text: 'Как сам?'},
        {messageId: 114, author: 101, text: 'Огонь'}],
    102: [{messageId: 111, author: 102, text: 'Ку'}],
    103: [{messageId: 111, author: 103, text: 'Ку'}],
    104: [{messageId: 111, author: 104, text: 'Хай'}, {messageId: 112, author: 100, text: 'Привет)'}],
    105: [{messageId: 111, author: 105, text: 'Ку'}],
    106: [{messageId: 111, author: 106, text: 'Здарова, Мижго'}],
    107: [{messageId: 111, author: 107, text: 'Ку'}],
    110: [{messageId: 111, author: 110, text: 'Как делы?'}],
}

export const messagesReducer = (state = messagesInitialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            //debugger
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
            let dialogWhitCurrentContact = Object.entries(state).filter(chat => chat[0] == action.payload)
            let messageForRemove = dialogWhitCurrentContact[0][1].filter(message => message.messageId !== action.messageId)
            return {
                ...state,
                [action.payload]: messageForRemove

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

        default:
            return state
    }
}