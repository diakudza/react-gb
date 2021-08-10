import React, {useEffect, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {Word} from "./word";
import {useRequestApi} from "../../hooks/api/useRequestApi";
import {wordApi} from "../../api";
import {dictionaryConnect} from "../../connects/dictionaryConnect"

export const DictionaryRender = ({word, MessageRequest, showResult, resetDictionaryStore}) => {

    let textValue = React.useRef();

    useEffect(() => {
        textValue.current?.focus();
    })

    const getWordState = useRequestApi({
        api: wordApi.getRuWord,
    })

    const sendValueToComponent = (event) => {
        MessageRequest(textValue.current.value)
    }
    const resetSearch = (event) => {
        resetDictionaryStore()
        textValue.current.value = ''
    }
    return (
        <div className="padding020">

            <h2>Словарь</h2>

            <p>Введите слово, что бы узнать его значение</p>

            <div className="flexRow">
                <TextField
                    inputRef={textValue}
                    size="small"
                    variant="outlined"
                    placeholder="Введите слово.."
                />
                <Button onClick={sendValueToComponent}>Запрос</Button>
                <Button onClick={resetSearch}>Сброс</Button>
            </div>

            {getWordState.isLoading && <div>loading ...</div>}
            {getWordState.isError && <div>error</div>}
            {word.showResult && <Word data={word}/>}
            {word.error && <p>Нет такого слова в базе</p>}

        </div>
    );
}

export const Dictionary = dictionaryConnect(DictionaryRender);
