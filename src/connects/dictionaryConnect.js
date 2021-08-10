import {connect} from 'react-redux';
import {createWordRequest, wordState, showWord, resetDictionaryStore} from "../store/Dictionary";


const mapStateToProps = (state) => {
    return {
        word: wordState(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        MessageRequest: (word) => dispatch(createWordRequest(word)),
        showResult: (isShow) => dispatch(showWord(isShow)),
        resetDictionaryStore: () => dispatch(resetDictionaryStore()),

    }
}

export const dictionaryConnect = connect(mapStateToProps, mapDispatchToProps);