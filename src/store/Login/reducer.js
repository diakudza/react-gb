import {SHOW_LOGIN, ADD_LOGIN, IS_AUTHIFICATED} from "./action";

const loginInitialState = {
    login: 'guest',
    auth: false
}

export const loginReducer = (state = loginInitialState, action) => {

    switch (action.type) {
        case SHOW_LOGIN:
            return {
                ...state.login
            }

        case IS_AUTHIFICATED:
            debugger
            return {
                ...state,
                auth: action.payload
            }

        case ADD_LOGIN:
            return {
                ...state,
                login: action.payload
            }

        default:
            return state
    }
}