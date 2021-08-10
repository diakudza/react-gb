import {wordApi} from "../../api";

export const SAVE_WORD = "DICTIONARY::SAVE_WORD";
export const SHOW_GETTED_WORD = "DICTIONARY::SHOW_GETTED_WORD";
export const ADD_GETTING_ERROR = "DICTIONARY::ADD_GETTING_ERROR";
export const WORD_LOADING = 'DICTIONARY::WORD_LOADING';
export const WORD_LOADING_SUCCESS = 'DICTIONARY::WORD_LOADING_SUCCESS';
export const SAVE_ERROR_RESPONSE_FROM_API = 'DICTIONARY::SAVE_ERROR_RESPONSE_FROM_API';
export const RESET_DICTIONATY_STORE = 'DICTIONARY::RESET_DICTIONATY_STORE';

export const saveWord = (definition) => ({type: SAVE_WORD, payload: definition,})

export const showWord = (isShow) => ({type: SHOW_GETTED_WORD, payload: isShow})
export const resetDictionaryStore = () => ({type: RESET_DICTIONATY_STORE})

export const createGettingError = (error) => ({
    type: ADD_GETTING_ERROR,
    payload: error,
})

export const saveErrorResponseFromAPI = (error) => ({
    type: SAVE_ERROR_RESPONSE_FROM_API,
    payload: error,
})

export const createWordLoading = (isLoading) => ({
    type: WORD_LOADING,
    payload: isLoading,
})

export const createAddGettingError = (error) => ({
    type: ADD_GETTING_ERROR,
    payload: error,
})

export const createWordLoadingSuccess = () => ({type: WORD_LOADING_SUCCESS})

export const createWordRequest = (word) => async (dispatch) => {

    dispatch(createWordLoading(true))

    const [error, result] = await wordApi.getRuWord(word);

    if (error) {

        dispatch(createAddGettingError(error))
    }
    if (result) {

        if (result[0] != undefined) {
            dispatch(saveWord(result))
            dispatch(createGettingError(false))
            dispatch(createWordLoadingSuccess(true))
            dispatch(saveErrorResponseFromAPI(''))
            dispatch(showWord(true))

        } else {
            dispatch(saveErrorResponseFromAPI(result.message))
            dispatch(createGettingError(true))
            dispatch(createWordLoadingSuccess(true))
            dispatch(showWord(false))
        }
    }


    dispatch(createWordLoading(false))
}