export const GET_ALL_CONTACTS = "CONTACTS::GET_ALL_CONTACTS";
export const GET_CONTACT_BY_ID = "CONTACTS::GET_CONTACT_BY_ID"
//export const LAST_MESSAGE_FOR_CONTACT = "CONTACTS::LAST_MESSAGE_FOR_CONTACT"


export const getAllContact = () => ({ type: GET_ALL_CONTACTS })
export const getContactById = (userId) => ({ type: GET_CONTACT_BY_ID, payload: userId })
//export const lastMessageForContact = (userId) => ({ type: LAST_MESSAGE_FOR_CONTACT, payload: userId })

