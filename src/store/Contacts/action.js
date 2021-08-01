export const GET_ALL_CONTACTS = "GET_ALL_CONTACTS";
export const GET_CONTACT_BY_ID = "GET_CONTACT_BY_ID"

export const getAllContact = () => ({ type: GET_ALL_CONTACTS })
export const getContactById = (userId) => ({ type: GET_CONTACT_BY_ID, payload: userId })
