import {connect} from 'react-redux';
import {checkBoxToggle, status} from "../store/profile";

const mapStateToProps = (state) => {
    return {
        status: status(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: () => dispatch(checkBoxToggle()),

    }
}


export const profileConnect = connect(mapStateToProps, mapDispatchToProps);