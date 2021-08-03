import {connect} from 'react-redux';
import {sendMessage, removeMessage, getStateSelector, getDialogById,getStateWithMessageSelector} from "../store/Messages";

const mapStateToProps = (state) => {
    return {
        getDialog: getStateSelector(state),
        getMessage: getStateWithMessageSelector(state)

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (id) => dispatch(sendMessage(id)),
        removeMessage: (chatid, id) => dispatch(removeMessage(chatid,id)),
        getDialogById: (id) => {dispatch(getDialogById(id))}
    }
}


export const messagesConnect = connect(mapStateToProps,  mapDispatchToProps);