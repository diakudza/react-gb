import {connect} from 'react-redux';
import {checkBoxToggle, getStatus} from "../store/profile";

const mapStateToProps = (state) => {
    return {
        status: getStatus(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: () => dispatch(checkBoxToggle()),

    }
}


export const profileConnect = connect(mapStateToProps, mapDispatchToProps);