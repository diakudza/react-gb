import {GET_ALL_CONTACTS, ADD_CONTACT_FROM_DB, GET_CONTACT_BY_ID} from "./action";

const contactsInitialState = {}

export const contactsReducer = (state = contactsInitialState, action) => {

    switch (action.type) {

        case GET_ALL_CONTACTS:
            return state

        case GET_CONTACT_BY_ID:
            let findContact = Object.entries(state).filter((user) => user[0] == action.payload)
            findContact = findContact[0][1]

            return {...state, findContact}

        case ADD_CONTACT_FROM_DB:
           // debugger
            return {
                ...state, [action.key]: [action.payload]
            }

        default:
            return state
    }
}