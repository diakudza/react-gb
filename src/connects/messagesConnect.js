import {connect} from 'react-redux';
import {sendMessage, removeMessage, getAllMessages, removeMessage} from "../store/Messages";

const mapStateToProps = (userId) => {
    return {
        getMessages: getAllMessages(userId),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (id) => dispatch(sendMessage(id)),
        removeMessage: (id) => dispatch(removeMessage(id)),
    }
}


export const messageConnect = connect(mapStateToProps,  mapDispatchToProps);