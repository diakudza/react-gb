import React from "react";

const Form = (props) => {

    let textValue = React.createRef();

    let addPost = () => {
        let text = textValue.current.value;
        props.setmessage(text);
        textValue.current.value = '';
    }

    return (
        <form>
            <textarea ref={textValue}> </textarea>
            <button onClick={addPost}>Отправить</button>
        </form>
    );
}

export default Form;
