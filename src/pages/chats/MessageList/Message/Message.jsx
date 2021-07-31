import s from './Message.module.css';
import {useRef} from "react";

const Message = (props) => {

    const removeItemMessage = () => props.removeChatMessage(props.id)

    return (
        <div onClick={removeItemMessage} id={props.id} className={props.im ? s.messageAI : s.message} >
            {props.author} : {props.messages}
        </div>
    );

}

export default Message;
