import {SEND_MESSAGE, GET_ALL_MESSAGES, REMOVE_MESSAGES} from "./action";

const messagesInitialState = {

    101: [{messageId: 112, author: 101, text: 'Хелло'},
        {messageId: 113, author: 100, text: 'Как сам?'},
        {messageId: 114, author: 101, text: 'Огонь'}],

    102: [{messageId:111, author: 102, text: 'Ку'}],

    103: [{messageId:111, author: 103, text: 'Ку'}],

    104: [{messageId:111, author: 104, text: 'Хай'},{messageId:112, author: 100, text: 'Привет)'}],

    105: [{messageId:111, author: 105, text: 'Ку'}],
    106: [{messageId:111, author: 106, text: 'Здарова, Мижго'}],
    107: [{messageId:111, author: 107, text: 'Ку'}],
    110: [{messageId:111, author: 110, text: 'Как делы?'}],
}

export const messagesReducer = (state = messagesInitialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            debugger
            return {
                // ...state,[{messageId: , author: 101, text: 'Хелло'}]
            }

        case REMOVE_MESSAGES:
            debugger
            return state

        case GET_ALL_MESSAGES:
            debugger
            let findContact = state.filter((user) => user.id == action.payload)
            return { ...state, findContact }

        default:
            return state
    }
}