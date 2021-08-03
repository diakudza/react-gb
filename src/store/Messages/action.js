export const SEND_MESSAGE = "SEND_MESSAGE";
export const GET_ALL_MESSAGES = "GET_ALL_MESSAGES"
export const REMOVE_MESSAGES = "REMOVE_MESSAGES"
export const GET_DIALOG_BY_ID = "GET_DIALOG_BY_ID"

export const sendMessage = (userId) => ({ type: SEND_MESSAGE, payload: userId })
export const removeMessage = (chatId,messageId) => ({ type: REMOVE_MESSAGES , payload: chatId, messageId })
//export const getAllMessages = (userId) => ({ type: GET_ALL_MESSAGES, payload: userId })
export const getDialogById = (userId) => ({ type: GET_DIALOG_BY_ID, payload: userId })
