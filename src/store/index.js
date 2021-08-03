import {createStore, combineReducers,applyMiddleware} from "redux";
import {profileReducer} from "./profile"
import {contactsReducer} from "./Contacts";
import {messagesReducer} from "./Messages";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    profile: profileReducer,
    contacts: contactsReducer,
    messages: messagesReducer,
})

export const store = createStore(
    rootReducer, applyMiddleware(thunk)
 );

//,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
