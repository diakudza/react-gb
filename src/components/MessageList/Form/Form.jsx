import React, {useEffect} from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const Form = (props) => {
    console.log(props)
    let textValue = React.useRef();

    let setMessage = (event) => {
        debugger
        let text = textValue.current.value;
        props.setMessage(text);
        event.preventDefault();
        textValue.current.value = '';
    }
    useEffect(()=>{
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
