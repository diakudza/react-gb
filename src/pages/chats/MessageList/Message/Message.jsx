import s from './Message.module.css';
import {useRef} from "react";

const Message = (props) => {
    // console.log(props)
    if(props===undefined){props.messages.im=true}

    // console.log(props.getAuthorById(100))

    return (
        <div onClick={props.removeItem} idMes = {props.messages.id} className={props.messages.im ? s.messageAI : s.message}>
            {props.getAuthorById(props.messages.author)} : {props.messages.text}
        </div>
    );

}

export default Message;
