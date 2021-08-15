import {contactsRef} from "../../api/requests/contacts";

export const GET_ALL_CONTACTS = "CONTACTS::GET_ALL_CONTACTS";
export const GET_CONTACT_BY_ID = "CONTACTS::GET_CONTACT_BY_ID"
export const ADD_CONTACT_FROM_DB = "CONTACTS::ADD_CONTACT_FROM_DB"


export const getAllContact = () => ({type: GET_ALL_CONTACTS})
export const addContactFromDB = (contact, key) => ({type: ADD_CONTACT_FROM_DB, payload: contact, key})
export const getContactById = (userId) => ({type: GET_CONTACT_BY_ID, payload: userId})

export const initContactsTracking = () => (dispatch) => {

    contactsRef.on("value", (snapshot) => {


        snapshot.forEach((value) => {
            //debugger
            dispatch(addContactFromDB(value.val(), value.key))
        })

    })


}


