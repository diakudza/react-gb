import {connect} from 'react-redux';
import {allContactListSelector, contactByIdSelector} from "../store/Contacts";

const mapStateToProps = (state) => {
    return {
        contactList: allContactListSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getContactById: (id) => dispatch(contactByIdSelector(id)),
    }
}

export const contactsConnect = connect(mapStateToProps,  mapDispatchToProps);