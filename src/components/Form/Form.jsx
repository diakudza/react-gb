import React from "react";
import '../../App.css';
const Form = (props) => {

    let textValue = React.createRef();
    let loginValue = React.createRef();
    let addPost = (event) => {
        let text = textValue.current.value;
        let login = loginValue.current.value;
        props.setmessage(text,login);
        //alert(text);
        event.preventDefault();
        textValue.current.value = '';
    }

    return (
        <form className="form">
           <div> <textarea ref={textValue} >Some text </textarea></div>
            <input ref={loginValue} type="text" placeholder="author"/>
            <button onClick={addPost}>Отправить</button>
        </form>
    );
}

export default Form;
