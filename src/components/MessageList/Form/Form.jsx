import React from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

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

  //   const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

    return (
        <form className="form">
        <TextField
          id="outlined-textarea"
          label="Ваше вообщение"
          placeholder="Ваше сообщение"
          multiline
          variant="outlined"
          ref={textValue}
        />
            {/*<textarea ref={textValue}>Some text </textarea>*/}
           {/* <input ref={loginValue} type="text" placeholder="author"/>*/}
            <TextField id="outlined-basic" ref={loginValue} label="author" variant="outlined" />
            <Button variant="contained" onClick={setMessage} color="primary">
                Отправить
            </Button>
        </form>
    );
}

export default Form;
