import {createStore, combineReducers} from "redux";
import {profileReducer} from "./profile"
import {contactsReducer} from "./Contacts";
import {messagesReducer} from "./Messages";

const rootReducer = combineReducers({
    profile: profileReducer,
    contacts: contactsReducer,
    messages: messagesReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);