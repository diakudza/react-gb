import React from "react";

export const Word = (props) => {

    console.log(props.data)
    let startState = {
        definition: false,
        arrOfDef: false,
        antonyms: '',
        genus: '',
        word: '',
        error: '',
    }

    if (props.data != undefined) { // не пойму почему 3 раза делает запрос. Первый undefined, поэтому прикрутил такой костыль

        if (!props.data.message) {
            debugger
            console.log(props.data)
            startState.word = props.data[0].word
            startState.definition = props.data[0].meanings[0].definitions
            startState.genus = props.data[0].meanings[0].partOfSpeech
            startState.antonyms = startState.definition[0].antonyms[0]
            startState.error = '';

            if (startState.definition.isArray) {
                startState.arrOfDef = startState.definition.definition.map((def, id) => {
                    <p key={id}>{def}</p>
                })
            } else {
                startState.arrOfDef = startState.definition[0].definition

            }
        } else {
            debugger
            startState.error = props.data.title
        }
    }


    return (
        <>
            {startState.definition && <p>Слово: {startState.word} </p>}
            {startState.genus && <p>Род: {startState.genus} </p>}
            {startState.definition && <p>Значение: {startState.arrOfDef} </p>}
            {startState.antonyms && <p>Антоним: {startState.antonyms} </p>}
            {startState.error && <p>Ошибка: {startState.error} </p>}

        </>
    );
}