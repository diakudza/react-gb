import React, {useEffect, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {Word} from "./word";
import {useRequestApi} from "../../hooks/api/useRequestApi";
import {wordApi} from "../../api";

const Dictionary = () => {

    const [ShowWordResult, setShowWordResult] = useState(false);
    const [WordForSearch, setWordForSearch] = useState('');

    let textValue = React.useRef();

    useEffect(() => {
        textValue.current?.focus();
    })

    const getWordState = useRequestApi({
        api: wordApi.getRuWord,

    })

    const sendValueToComponent = (event) => {
        setShowWordResult(true)
        setWordForSearch(textValue.current.value)
        getWordState.request(textValue.current.value)
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
            </div>

            {getWordState.isLoading && <div>loading ...</div>}
            {getWordState.isError && <div>error</div>}

            {ShowWordResult && <Word word={WordForSearch} data={getWordState.data}/>}


        </div>
    );
}

export default Dictionary;
