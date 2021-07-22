import React, {useEffect} from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const Form = (props) => {
    let textValue = React.useRef();
    let setMessage = (event) => {
        let text = textValue.current.value;
        if (text==''){
            alert('Поле пустое!')
            event.preventDefault();
        }else {
            props.setMessage(text);
            event.preventDefault();
            textValue.current.value = '';
        }
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
