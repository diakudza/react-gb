import {CHECKBOX_TOGGLE, SHOW_CHECKBOX_STATUS} from "./action";

const profileInitialState = {
    checked: false,
    status: 'checked'
}

export const profileReducer = (state = profileInitialState, action) => {

    switch (action.type) {

        case CHECKBOX_TOGGLE:
            //debugger

            return {
                ...state,
                checked: !state.checked
            }
        case SHOW_CHECKBOX_STATUS:
            //debugger
            console.log(state.checked)
            return state.checked

        default:
            // debugger
            return state
    }
}