import {connect} from 'react-redux';
import {allContactListSelector, contactByIdSelector,lastMessageForContact, stateWithMessageSelector} from "../store/Contacts";

const mapStateToProps = (state) => {
    return {
        contactList: allContactListSelector(state),
        messageList: stateWithMessageSelector(state),

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLastMessageByContactId: (id) => dispatch(lastMessageForContact(id)),

    }
}

export const contactsConnect = connect(mapStateToProps,  mapDispatchToProps);