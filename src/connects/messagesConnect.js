import {connect} from 'react-redux';
import {
    sendMessage,
    removeMessageFromDB,
    stateSelector,
    getDialogById,
    stateWithMessageSelector,
    lastMessage, removeMessageFrom,
} from "../store/Messages";

const mapStateToProps = (state) => {
    return {
        dialogState: stateSelector(state),
        messageState: stateWithMessageSelector(state)

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (id) => dispatch(sendMessage(id)),
        removeMessage: (chatid, id) => dispatch(removeMessageFrom(chatid, id)),
        getDialogById: (id) => dispatch(getDialogById(id)),
        getLastMessage: (id) => dispatch(lastMessage(id)),

    }
}


export const messagesConnect = connect(mapStateToProps, mapDispatchToProps);