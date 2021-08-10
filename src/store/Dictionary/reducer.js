import {SAVE_WORD, SHOW_GETTED_WORD, SAVE_ERROR_RESPONSE_FROM_API, RESET_DICTIONATY_STORE} from "./action";

const dictionaryInitialState = {
    definition: false,
    arrOfDef: '',
    antonyms: '',
    genus: '',
    word: '',
    error: '',
    showResult: false
}

export const dictionaryReducer = (state = dictionaryInitialState, action) => {

    switch (action.type) {

        case SAVE_WORD:

            return {
                ...state,
                definition: action.payload[0].meanings[0].definitions,
                word: action.payload[0].word,
                genus: action.payload[0].meanings[0].partOfSpeech,
                antonyms: action.payload[0].meanings[0].definitions[0].antonyms[0]
            }
        case SAVE_ERROR_RESPONSE_FROM_API:

            return {
                ...state,
                error: action.payload
            }

        case SHOW_GETTED_WORD:

            return {...state, showResult: action.payload}

        case RESET_DICTIONATY_STORE:
            return {
                ...state
                , dictionaryInitialState
            }

        default:
            return state
    }
    console.log(state)
}