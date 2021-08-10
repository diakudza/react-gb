import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import {profileReducer} from "./profile"
import {contactsReducer} from "./Contacts";
import {messagesReducer, SEND_MESSAGE, sendMessage} from "./Messages";
import {dictionaryReducer} from "./Dictionary"
import thunk from 'redux-thunk';
import {v4 as uuidv4} from "uuid";
//import {dictionaryConnect} from "../connects/dictionaryConnect";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    contacts: contactsReducer,
    messages: messagesReducer,
    dictionary:dictionaryReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const addAnswerAutoMessege = (store) => (dispatch) => (action) => {

    if (action.type == SEND_MESSAGE) {
        //console.log(store, action)
        if (action.payload.author == 100) {
            setTimeout(() => dispatch(sendMessage({
                chatID: action.payload.chatID,
                messageId: uuidv4(),
                author: action.payload.chatID,
                text: 'Я тебя не понимаю)'
            })), 1000)
        }
    }

    return dispatch(action)
}

//export const persistore = persistStore(store)

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(persistReducer(persistConfig, rootReducer), composer(applyMiddleware(addAnswerAutoMessege, thunk))
);

//,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
