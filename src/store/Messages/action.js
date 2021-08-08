export const SEND_MESSAGE = "MESSAGE::SEND_MESSAGE";
export const GET_ALL_MESSAGES = "MESSAGE::GET_ALL_MESSAGES"
export const REMOVE_MESSAGES = "MESSAGE::REMOVE_MESSAGES"
export const GET_DIALOG_BY_ID = "MESSAGE::GET_DIALOG_BY_ID"
export const LAST_MESSAGE = "MESSAGE::LAST_MESSAGE"

export const sendMessage = (userId) => ({ type: SEND_MESSAGE, payload: userId })
export const removeMessage = (chatId,messageId) => ({ type: REMOVE_MESSAGES , payload: chatId, messageId })
export const lastMessage = (userId) => ({ type: LAST_MESSAGE, payload: userId })
export const getDialogById = (userId) => ({ type: GET_DIALOG_BY_ID, payload: userId })
