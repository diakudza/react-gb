import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import '../../../../App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import {messageApi} from "../../../../api/requests/message";
import {v4 as uuidv4} from "uuid";

const Form = (props) => {

    let textValue = React.useRef();

    const [error, setError] = useState("");
    const {push} = useHistory();

    const handleSubmit = async (e, text) => {

        try {
            debugger
            await messageApi.sendMessage(props.id, 100, uuidv4(), text);
            push(`/Chat/${props.id}`)
        } catch (e) {
            console.log(e)
            setError(e);
        }
    };


    let setMessage = (event) => {
        let text = textValue.current.value;
        if (text === '') {
            alert('Поле пустое!')
            event.preventDefault();
        } else {
            handleSubmit(event, text)
            event.preventDefault();
            textValue.current.value = '';
        }
    }
    useEffect(() => {
        textValue.current?.focus();
    })

    return (
        <form className="form">
            <TextField
                id="outlined-textarea"
                placeholder="Ваше сообщение"
                size="small"
                variant="outlined"
                inputRef={textValue}
            />

            <Button variant="contained" onClick={setMessage} color="primary">
                Отправить
            </Button>
        </form>
    );
}

export default Form;
