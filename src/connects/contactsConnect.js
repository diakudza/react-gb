import {connect} from 'react-redux';
import {getAllContactListSelector, getContactByIdSelector} from "../store/Contacts";

const mapStateToProps = (state) => {
    return {
        getContactList: getAllContactListSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        contactById: (id) => dispatch(getContactByIdSelector(id)),
    }
}

export const contactsConnect = connect(mapStateToProps,  mapDispatchToProps);