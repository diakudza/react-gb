import {connect} from 'react-redux';
import {getAllContactList,  getContactById} from "../store/Contacts";

const mapStateToProps = (state) => {
    return {
        getContactList: getAllContactList(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        contactById: (id) => dispatch(getContactById(id)),
    }
}


export const contactsConnect = connect(mapStateToProps,  mapDispatchToProps);