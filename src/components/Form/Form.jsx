import React from "react";
import '../../App.css';

const Form = (props) => {

    let textValue = React.useRef();
    let addPost = (event) => {
        let text = textValue.current.value;
        props.setmessage(text);
        event.preventDefault();
        textValue.current.value = '';
    }

    return (
        <form className="form">
           <input ref={textValue} placeholder="Текст сообщения"/>
           <button onClick={addPost}>Отправить</button>
        </form>
    );
}

export default Form;
