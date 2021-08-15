import {connect} from 'react-redux';
import {loginState, addLogin, switchAuthVar, isAuth} from "../store/Login";


const mapStateToProps = (state) => {

    return {
        isAuthificated: isAuth(state),
        loginName: loginState(state)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addLoginToStore: (login) => dispatch(addLogin(login)),
        switchAuthVar: (isAuth) => dispatch(switchAuthVar(isAuth))
    }
}

export const loginConnect = connect(mapStateToProps, mapDispatchToProps);