export const SEND_MESSAGE = "SEND_MESSAGE";
export const GET_ALL_MESSAGES = "GET_ALL_MESSAGES"
export const REMOVE_MESSAGES = "REMOVE_MESSAGES"

export const sendMessage = (userId) => ({ type: SEND_MESSAGE, payload: userId })
export const removeMessage = (messageId) => ({ type: REMOVE_MESSAGES , payload: messageId })
export const getAllMessages = (userId) => ({ type: GET_ALL_MESSAGES, payload: userId })
