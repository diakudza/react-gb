import {GET_ALL_CONTACTS, GET_CONTACT_BY_ID, LAST_MESSAGE} from "./action";

const contactsInitialState = {

    101: {author: "toxa", ava: '2.png'},
    102: {author: "lexa", ava: '3.png'},
    103: {author: "Anna", ava: '4.png'},
    104: {author: "Janna", ava: '5.png'},
    105: {author: "Kolia", ava: '2.png'},
    106: {author: "Roman", ava: '5.png'},
    107: {author: "Kesha", ava: '3.png'},
    110: {author: "Robot", ava: '1.png'},
}

export const contactsReducer = (state = contactsInitialState, action) => {

    switch (action.type) {

        case GET_ALL_CONTACTS:
            //debugger
            return state

        case GET_CONTACT_BY_ID:
            //debugger
            let findContact = Object.entries(state).filter((user) => user[0] == action.payload)
            findContact = findContact[0][1]
            //console.log(findContact)
            return { ...state, findContact}

        default:
            return state
    }
}