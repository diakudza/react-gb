import {db} from '../firebase';

export const messageRef = db.ref('chats');

export const messageApi = {
    loadMessage: () => {
        return messageRef
    },
    sendMessage: (toChat,author,messageId,text) => {
        debugger

        return messageRef.child(toChat).child(messageId).set({author,text})
    },
    removeMessageFromDB: (chatId,messageId) => {
        debugger
        return messageRef.child(chatId).child(messageId).remove()
    }

}

