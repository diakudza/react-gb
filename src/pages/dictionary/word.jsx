import React from "react";

export const Word = (props) => {
    let arrOfDef = []
    if (!props.data.error) {

        console.log(props.data)
        if (props.data.definition.length > 1) {
            debugger
            arrOfDef = Object.entries(props.data.definition).map((element, id) =>
                <div> {element[1].definition} </div>
            )
            console.log(arrOfDef[0])
        }
    else
        {
            debugger
            arrOfDef = props.data.definition[0].definition
        }
    }

    return (
        <>
            {props.data.definition && <p>Слово: {props.data.word} </p>}
            {props.data.genus && <p>Род: {props.data.genus} </p>}
            {props.data.definition && <p>Значение: {arrOfDef} </p>}
            {props.data.antonyms && <p>Антоним: {props.data.antonyms} </p>}
            {props.data.error && <p>Ошибка: {props.data.error} </p>}

        </>
    );
    }