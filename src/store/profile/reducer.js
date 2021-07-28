import {CHECKBOXTOGGLE, SHOWCHECKBOXSTATUS} from "./action";

const profileInitialState = {
    checked: false,
    status: 'checked'
}

export const profileReducer = (state = profileInitialState, action) => {

    switch (action.type) {

        case CHECKBOXTOGGLE:
            // debugger

            return {
                ...state,
                checked: !state.checked
            }
        case SHOWCHECKBOXSTATUS:
            // debugger
            console.log(state.checked)
            return state.checked

        default:
            // debugger
            return state
    }
}