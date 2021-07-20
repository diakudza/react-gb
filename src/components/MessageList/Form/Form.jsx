import React from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button'

const Form = (props) => {
    console.log(props)
    let textValue = React.createRef();
    let loginValue = React.createRef();
    let setMessage = (event) => {
        debugger
        let text = textValue.current.value;
        let login = loginValue.current.value;
        props.setMessage(text, login);
        //alert(text);
        event.preventDefault();
        textValue.current.value = '';
    }

    return (
        <form className="form">
            <div><textarea ref={textValue}>Some text </textarea></div>
            <input ref={loginValue} type="text" placeholder="author"/>
            <Button variant="contained" onClick={setMessage} color="primary">
                Отправить
            </Button>
        </form>
    );
}

export default Form;
